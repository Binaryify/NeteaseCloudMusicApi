<template>
  <div class="load-more">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    //获取滚动条当前的位置
    getScrollTop() {
      var scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    //获取当前可视范围的高度
    getClientHeight() {
      var clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(
          document.body.clientHeight,
          document.documentElement.clientHeight
        )
      } else {
        clientHeight = Math.max(
          document.body.clientHeight,
          document.documentElement.clientHeight
        )
      }
      return clientHeight
    },

    //获取文档完整的高度
    getScrollHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      )
    }
  },
  created() {},
  mounted() {
    //滚动事件触发
    var self = this
    window.onscroll = function() {
      if (
        self.getScrollTop() + self.getClientHeight() >=
        self.getScrollHeight()
      ) {
        self.$emit('scroll-state', true)
      }
    }
  },
  destroyed() {
    // window.onscroll = null;
  }
}
</script>

<style lang="stylus" scoped></style>
