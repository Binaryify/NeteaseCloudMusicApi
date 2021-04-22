<template>
  <div
    class="rank-wrap container"
    v-loading="fullscreenLoading"
  >
    <div class="module">
      <h2 class="title flex-row">云音乐特色榜</h2>
      <song-sheet :sheetList="featureList" />
    </div>
    <div class="module">
      <h2 class="title flex-row">全球媒体榜</h2>
      <song-sheet :sheetList="globalList" />
    </div>
  </div>
</template>

<script>
import songSheet from 'components/common/songSheet/Index'
export default {
  data() {
    return {
      ranks: [],
      fullscreenLoading: false
    }
  },
  components: {
    songSheet
  },
  computed: {
    featureList: function() {
      return this.ranks.slice(0, 4)
    },
    globalList: function() {
      return this.ranks.slice(4, this.ranks.length)
    }
  },
  watch: {},
  methods: {
    // 获取排行榜数据
    async getToplist() {
      this.fullscreenLoading = true
      try {
        let res = await this.$api.getToplist()
        if (res.code === 200) {
          this.ranks = res.list
          this.fullscreenLoading = false
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  created() {},
  mounted() {
    this.getToplist()
  }
}
</script>
<style lang="stylus" scoped>
.rank-wrap {
  .module {
    .title {
      position: relative;
      padding-left: 15px;
      margin-bottom: 20px;
      &::before {
        content: '';
        width: 3px;
        height: 20px;
        background: $color-theme;
        position: absolute;
        left: 0;
        top: 2px;
      }
    }
  }
}
</style>
