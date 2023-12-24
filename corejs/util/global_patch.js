// Description: 全局补丁, 模拟window对象, 以及一些全局方法
// Author: LuTong
// Date: 2021/10/13

if (typeof window === 'undefined') {
  var window = {
    crypto: {
      getRandomValues: function (array) {
        for (var i = 0; i < array.length; i++) {
          array[i] = Math.floor(Math.random() * Math.pow(2, 32))
        }
        return array
      },
    },
  }
}
