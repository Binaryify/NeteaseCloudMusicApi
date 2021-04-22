<template>
  <li @click="toSinger(item)">
    <div class="cover">
      <div class="image">
        <el-image
          :key="item.img1v1Url + '?param=200y200'"
          :src="item.img1v1Url + '?param=200y200'"
          lazy
        >
          <div slot="placeholder" class="image-slot flex-center flex-column">
            <i class="iconfont niceicon-3"></i>
            <p>加载中<span class="dot">...</span></p>
          </div>
          <div slot="error" class="image-slot flex-center">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
    </div>
    <div class="info">
      <p class="name">{{ item.name }}</p>
      <p class="count" v-if="item.musicSize">单曲数{{ item.musicSize }}</p>
    </div>
  </li>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  props: {
    item: {
      type: Object
    }
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    // 跳转歌手页面
    toSinger(item) {
      this.$router.push({
        name: 'singerDetail',
        query: {
          id: item.id
        }
      })
      this.setSinger(item)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  created() {},
  mounted() {}
}
</script>
<style lang="stylus" scoped>
li {
  padding: 0 15px 30px;
  flex: 0 0 10%;
  max-width: 10%;
  .cover {
    position: relative;
    z-index: 2;
    padding-top: 100%;
    border-radius: 50%;
    background-color: #d9d9d9;
    .image {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100%;
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        -webkit-box-shadow: 1px 1px 0 rgba(0,0,0,.05) inset, -1px -1px 0 rgba(0,0,0,.05) inset;
        box-shadow: inset 1px 1px 0 rgba(0,0,0,.05), inset -1px -1px 0 rgba(0,0,0,.05);
      }
    }
  }
  .info {
    margin-top: 15px;
    text-align: center;
    .name {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      word-break: break-word;
    }
    .count {
      font-size: 12px;
      margin-top: 10px;
      color: $color-theme;
    }
  }
}
</style>
