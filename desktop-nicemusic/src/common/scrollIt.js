export function scrollIt(
  destination = 0,
  duration = 200,
  easing = 'linear',
  callback
) {
  // define timing functions -- 过渡动效
  let easings = {
    // no easing, no acceleration
    linear(t) {
      return t
    },
    // accelerating from zero velocity
    easeInQuad(t) {
      return t * t
    },
    // decelerating to zero velocity
    easeOutQuad(t) {
      return t * (2 - t)
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    },
    // accelerating from zero velocity
    easeInCubic(t) {
      return t * t * t
    },
    // decelerating to zero velocity
    easeOutCubic(t) {
      return --t * t * t + 1
    },
    // acceleration until halfway, then deceleration
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
    },
    // accelerating from zero velocity
    easeInQuart(t) {
      return t * t * t * t
    },
    // decelerating to zero velocity
    easeOutQuart(t) {
      return 1 - --t * t * t * t
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
    },
    // accelerating from zero velocity
    easeInQuint(t) {
      return t * t * t * t * t
    },
    // decelerating to zero velocity
    easeOutQuint(t) {
      return 1 + --t * t * t * t * t
    },
    // acceleration until halfway, then deceleration
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    }
  }
  // requestAnimationFrame()的兼容性封装：先判断是否原生支持各种带前缀的
  //不行的话就采用延时的方案
  ;(function() {
    var lastTime = 0
    var vendors = ['ms', 'moz', 'webkit', 'o']
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + 'RequestAnimationFrame']
      window.cancelAnimationFrame =
        window[vendors[x] + 'CancelAnimationFrame'] ||
        window[vendors[x] + 'CancelRequestAnimationFrame']
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime()
        var timeToCall = Math.max(0, 16 - (currTime - lastTime))
        var id = window.setTimeout(function() {
          callback(currTime + timeToCall)
        }, timeToCall)
        lastTime = currTime + timeToCall
        return id
      }

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id)
      }
  })()

  function checkElement() {
    // chrome,safari及一些浏览器对于documentElemnt的计算标准化,reset的作用
    document.documentElement.scrollTop += 1
    let elm =
      document.documentElement.scrollTop !== 0
        ? document.documentElement
        : document.body
    document.documentElement.scrollTop -= 1
    return elm
  }

  let element = checkElement()
  let start = element.scrollTop // 当前滚动距离
  let startTime = Date.now() // 当前时间

  function scroll() {
    // 滚动的实现
    let now = Date.now()
    let time = Math.min(1, (now - startTime) / duration)
    let timeFunction = easings[easing](time)
    element.scrollTop = timeFunction * (destination - start) + start

    if (element.scrollTop === destination) {
      callback // 此次执行回调函数
      return
    }
    window.requestAnimationFrame(scroll)
  }
  scroll()
}
