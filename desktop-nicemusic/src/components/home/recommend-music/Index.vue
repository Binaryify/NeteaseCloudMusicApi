<template>
  <div class="recommend-music">
    <h2 class="title">推荐新歌曲</h2>
    <song-list :songList="songs"></song-list>
  </div>
</template>

<script>
import songList from 'components/common/songList/Index'
import { createSong } from '@/model/song'
export default {
  data() {
    return {
      songs: []
    }
  },
  components: {
    songList
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 获取推荐新音乐
    async getNewSongs() {
      try {
        let res = await this.$api.getNewSongs()
        let list = []
        if(res.code === 200) {
          res.result.map(item => {
            list.push(item.id)
          })
          this.getSongDetail(list)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取歌曲列表
    async getSongDetail(sliceArr) {
      let timestamp = new Date().valueOf()
      sliceArr = sliceArr.join(',')
      try {
        let res = await this.$api.getSongDetail(sliceArr, timestamp)
        this.songs = this._normalizeSongs(res.songs)
        console.log(this.songs)
      } catch (error) {
      }
    },
    // 处理歌曲
    _normalizeSongs(list) {
      let ret = []
      list.map(item => {
        if (item.id) {
          ret.push(createSong(item))
        }
      })
      return ret
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getNewSongs()
  }
}
</script>

<style lang="stylus" scoped>
.recommend-music {
  .title {
    margin: 0 0 15px 0;
  }
}
</style>
