<template>
  <div class="progress-bar-wrap" @mouseup.self="progressMouseUp($event)">
    <div class="progress-bar" ref="progressBar" @click="progressClick">
      <div class="bar-inner">
        <div class="progress" ref="progress"></div>
        <div
          class="progress-btn"
          ref="progressBtn"
          @mousedown.prevent="progressMouseDown($event)"
          @mouseup="progressMouseUp($event)"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
const progressBtnWidth = 12
export default {
  data() {
    return {
      playProcess: 0
    }
  },
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  watch: {
    percent(newPercent) {
      this.setProgressOffset(newPercent)
    }
  },
  methods: {
    // 鼠标按下
    progressMouseDown(e) {
      let that = this
      this.touch.initiated = true
      this.touch.startX = e.pageX
      this.touch.left = this.$refs.progress.clientWidth
      document.onmousemove = function(e) {
        const deltaX = e.pageX - that.touch.startX
        const offsetWidth = Math.min(
          that.$refs.progressBar.clientWidth - progressBtnWidth,
          Math.max(0, that.touch.left + deltaX)
        )
        if (offsetWidth > that.$refs.progressBar.clientWidth) {
          console.log('xxxx')
        }
        that._offset(offsetWidth)
      }
    },
    // 鼠标放开
    progressMouseUp(e) {
      if (e.button === 0) {
        if (document.onmousemove == null) {
          return
        }
        document.onmousemove = null
        document.onmouseup = null
        this.touch.initiated = false
        this._triggerPercent()
      }
    },
    _triggerPercent() {
      this.$emit('percentChange', this._getPercent())
    },
    _offset(offsetWidth) {
      this.$refs.progress.style.width = `${offsetWidth}px`
    },
    _getPercent() {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      return this.$refs.progress.clientWidth / barWidth
    },
    // 点击控制进度
    progressClick(e) {
      const rect = this.$refs.progressBar.getBoundingClientRect()
      const offsetWidth = e.pageX - rect.left - 6
      this._offset(offsetWidth)
      this._triggerPercent()
    },
    // 设置进度条位置
    setProgressOffset(percent) {
      if (percent >= 0 && !this.touch.initiated) {
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const offsetWidth = percent * barWidth
        this._offset(offsetWidth)
      }
    }
  },
  created() {
    this.touch = {}
  }
}
</script>

<style lang="stylus" scoped>
.progress-bar-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.progress-bar {
  position: relative;
  width: 100%;
  flex: 1;
  height: 3px;
  background: rgba(0,0,0,.05);
  border-radius: 2px;
  cursor: pointer;
  margin: 0 25px;
  .bar-inner {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    .progress {
      width: 0px;
      background: $color-theme;
      height: 3px;
      border-radius: 2px;
    }
    .progress-btn {
      position: absolute;
      z-index: 100;
      right: -12px;
      width: 12px;
      height: 12px;
      top: -4.5px;
      background: $color-theme;
      box-shadow: 0 0 15px 0 rgba(0,0,0,.15);
      transition: all 0.3s;
      border-radius: 50%;
      &::after {
        position: absolute;
        content: " ";
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        width: 8px;
        height: 8px;
        background: #ffffff;
        border-radius: 50%;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
</style>
