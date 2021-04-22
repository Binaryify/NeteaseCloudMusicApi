<template>
  <div class="footer">
    <div class="container">
      <p class="title">nicemusic</p>
      <p class="desc">
        nicemusic
      </p>
      <div class="social flex-row">
        <a href="">
          <span class="flex-center">
            <i class="iconfont nicewangyiyunyinle"></i>
          </span>
        </a>
        <a href="">
          <span class="flex-center">
            <i class="iconfont niceicon_githubb"></i>
          </span>
        </a>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <p>
          <span class="mr5">Copyright © 2012-2020</span>
          <a href="https://www.lxhcool.cn">nicemusic 演示站</a>
          <span>. Designed by</span>
          <a href="https://www.lxhcool.cn" target="_blank">至一科技</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {},
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {}
}
</script>
<style lang="stylus" scoped>
.footer {
  width: 100%;
  background: #161e27;
  .container {
    padding: 3rem 0;
    .title {
      position: relative;
      font-size: .9375rem;
      letter-spacing: 1px;
      color: #fff;
      margin-bottom: 1rem;
      padding: 0 1rem;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 3px;
        height: 15px;
        border-radius: 5px;
        background: $color-theme;
        transform: translate(0%, -50%);
      }
    }
    .desc {
      font-size: 0.8125rem;
      line-height: 1.8;
      color: #6D7685;
    }
    .social {
      margin: 1rem -0.25rem 0;
      a {
        position: relative
        border-radius: 50%;
        text-align: center;
        width: 34px;
        height: 34px;
        font-size: 1rem;
        background-color: #232a31;
        border-color: #232a31;
        color: #6D7685;
        display: flex;
        font-weight: 400;
        margin: 0.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        span {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
        }
        &:hover {
          background: #11181f;
          color: #fff;
        }
      }
    }
  }
  .copyright {
    padding: 1.5rem 0;
    border-top: 1px solid #232a31;
    .container {
      padding: 0;
      color: #6D7685;
      font-size: 0.8125rem;
      a {
        color: #6D7685;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
