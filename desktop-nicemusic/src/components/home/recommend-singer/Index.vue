<template>
  <div class="recommend-singer">
    <h2 class="title">推荐歌手</h2>
    <ul class="singer-list">
      <singer-item
        v-for="item of singers"
        :key="item.id"
        :item="item"
      />
    </ul>
  </div>
</template>

<script>
import SingerItem from 'components/common/singerItem/Index'
export default {
  data() {
    return {
      singers: []
    }
  },
  components: {
    SingerItem
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取热门歌手
    async getHotSinger() {
      try {
        let res = await this.$api.getHotSinger()
        if (res.code === 200) {
          this.singers = res.artists
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getHotSinger()
  }
}
</script>
<style lang="stylus" scoped>
.recommend-singer {
  margin-top: 40px;
  .title {
    margin: 0 0 15px 0;
  }
  .singer-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin: 0px -15px 0;
  }
}
</style>
