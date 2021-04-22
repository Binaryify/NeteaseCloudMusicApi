<template>
  <div class="search-wrap">
    <div class="banner layer">
      <div class="search-inner">
        <div class="search-box flex-row">
          <input
            v-model="keyword"
            maxlength="128"
            type="text"
            placeholder="搜索音乐/MV/歌单/歌手"
            class="search"
          />
          <i class="iconfont nicesearch-o search-icon" @click="search(1)"></i>
        </div>
        <div
          class="list"
          :class="!isKeyword ? 'hot' : ''"
          style="display: none;"
        >
          <div
            class="item"
            v-if="searchResult.songs && searchResult.songs.length > 0"
          >
            <div class="title flex-row">
              <i class="iconfont niceyinfu3"></i> 单曲
            </div>
            <ul>
              <li v-for="item of searchResult.songs" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div
            class="item"
            v-if="searchResult.artists && searchResult.artists.length > 0"
          >
            <div class="title flex-row">
              <i class="iconfont niceicon-4"></i> 歌手
            </div>
            <ul>
              <li v-for="item of searchResult.artists" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div
            class="item"
            v-if="searchResult.albums && searchResult.albums.length > 0"
          >
            <div class="title flex-row">
              <i class="iconfont niceRaidobox-selectedRai1"></i> 专辑
            </div>
            <ul>
              <li v-for="item of searchResult.albums" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div
            class="item"
            v-if="searchResult.playlists && searchResult.playlists.length > 0"
          >
            <div class="title flex-row">
              <i
                class="iconfont nicebofangliebiao24"
                style="font-size: 20px;"
              ></i>
              歌单
            </div>
            <ul>
              <li v-for="item of searchResult.playlists" :key="item.id">
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="main container">
      <div class="tab flex-row">
        <h2>搜索结果</h2>
        <a :class="type === 1 ? 'active' : ''" @click="changeType(1)">单曲</a>
        <a :class="type === 100 ? 'active' : ''" @click="changeType(100)"
          >歌手</a
        >
        <a :class="type === 10 ? 'active' : ''" @click="changeType(10)">专辑</a>
        <a :class="type === 1014 ? 'active' : ''" @click="changeType(1014)"
          >视频</a
        >
        <a :class="type === 1000 ? 'active' : ''" @click="changeType(1000)"
          >歌单</a
        >
      </div>
      <div class="content">
        <artist-list :songs="songs" :isPerson="isPerson" v-if="type === 1" v-loading="loading" />
        <ul class="singer-list" v-if="type === 100">
          <singer-item v-for="item of singers" :key="item.id" :item="item" />
        </ul>
        <album-list :albums="albums" v-if="type == 10" />
        <mv-list :mvs="videos" v-if="type == 1014"></mv-list>
        <song-sheet :sheetList="playList" v-if="type == 1000"></song-sheet>
      </div>
    </div>
  </div>
</template>

<script>
import { createSong } from '@/model/song'
import { createVideo } from '@/model/video'
import ArtistList from 'components/common/artistList/Index'
import SingerItem from 'components/common/singerItem/Index'
import AlbumList from 'components/common/albumList/Index'
import MvList from 'components/common/mvList/Index'
import songSheet from 'components/common/songSheet/Index'
export default {
  data() {
    return {
      keyword: '',
      searchResult: {},
      limit: 30,
      offset: 0,
      type: 1,
      isPerson: true,
      songs: [],
      singers: [],
      albums: [],
      videos: [],
      playList: [],
      loading: false
    }
  },
  components: {
    ArtistList,
    SingerItem,
    AlbumList,
    MvList,
    songSheet
  },
  computed: {
    isKeyword() {
      return this.keyword.split(' ').join('').length == 0
    }
  },
  watch: {
    keyword(newVal, oldVal) {
      console.log(newVal, oldVal)
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword || this.keyword.split(' ').join('').length == 0) {
        this.searchResult = {}
        return
      }
      this.timer = setTimeout(() => {
        this.searchSuggest()
        this.search(this.type)
      }, 100)
    },
    $route(newObj, oldObj) {
      if(newObj.query.keyword !== oldObj.query.keyword) {
        this.keyword = newObj.query.keyword
        this.search(1)
      }
    }
  },
  methods: {
    // 更改搜索类型
    changeType(type) {
      this.type = type
      this.search(type)
    },
    // 搜索建议
    async searchSuggest() {
      let res = await this.$api.searchSuggest(this.keyword)
      // console.log(res)
      if (JSON.stringify(res.result) !== '{}') {
        this.searchResult = res.result
      }
    },
    // 搜索
    search(type) {
      this.$api
        .search(this.keyword, this.limit, this.offset, type)
        .then(res => {
          if (res.code === 200) {
            switch (type) {
              case 1: {
                let lists = res.result.songs
                let sliceArr = []
                lists.map(item => {
                  sliceArr.push(item.id)
                })
                this.getSongDetail(sliceArr)
                break
              }
              case 100: {
                this.singers = res.result.artists
                break
              }
              case 10: {
                this.albums = res.result.albums
                break
              }
              case 1014: {
                this.videos = this._normalizeVideos(res.result.videos)
                break
              }
              case 1000: {
                this.playList = res.result.playlists
                break
              }
              default: {
                let lists = res.result.songs
                let sliceArr = []
                lists.map(item => {
                  sliceArr.push(item.id)
                })
                this.getSongDetail(sliceArr)
                break
              }
            }
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取歌曲列表
    async getSongDetail(sliceArr) {
      this.loading = true
      let timestamp = new Date().valueOf()
      let ids = sliceArr.join(',')
      try {
        let beforeRes = await this.$api.getSongDetail(ids, timestamp)
        let res = beforeRes.songs
        this.songs = this._normalizeSongs(res)
        this.loading = false
      } catch (error) {
        console.log(error)
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
    },
    // 处理视频
    _normalizeVideos(list) {
      let ret = []
      list.map(item => {
        if (item.vid) {
          ret.push(
            createVideo({
              id: item.vid,
              nickName: item.creator.nickname,
              name: item.title,
              playCount: item.playTime,
              duration: item.durationms,
              image: item.coverUrl,
              isLive: false
            })
          )
        }
      })
      return ret
    }
  },
  created() {},
  mounted() {
    let keyword = this.$route.query.keyword
    if (keyword) {
      this.keyword = keyword
      this.search(1)
    }
  }
}
</script>
<style lang="stylus" scoped>
.search-wrap {
  margin-top: -20px;
  .banner {
    width: 100%;
    height: 250px;
    background: url(../../assets/images/personal.jpg);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    .search-inner {
      width: 720px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      .search-box {
        position: relative;
        z-index: 10;
        padding-left: 8px;
        border-radius: 2px;
        background: #f5f5f5;
        input {
          display: inline-block;
          height: 54px;
          flex: 1;
          line-height: 54px;
          border: none;
          margin-right: 24px;
          padding-left: 10px;
          background: #f5f5f5;
        }
        .search-icon {
          font-size: 20px;
          padding: 16px;
          cursor: pointer;
        }
      }
      .list {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 18px 0 15px;
        transition-property: top;
        transition-duration: .2s;
        transition-timing-function: ease-in-out;
        opacity: 0;
        z-index: 0;
        box-shadow: 0 10px 30px 0 rgba(65,67,70,.08);
        border-radius: 4px;
        &.hot {
          top: 110%;
          opacity: 1;
        }
        .item {
          .title {
            height: 30px;
            padding: 0 18px;
            font-size: 12px;
            color: #909399;
            line-height: 30px;
            i {
              font-size: 18px;
              margin-right: 5px;
              font-weight: bold;
              color: $color-theme;
            }
          }
        }
        ul {
          li {
            height: 38px;
            line-height: 38px;
            padding: 0 18px;
            font-weight: 300;
            background: #ffffff;
            transition: background 0.1s;
            cursor: pointer;
            &:hover {
              background: #f5f5f5;
            }
          }
        }
      }
    }
  }
  .main {
    .tab {
      display: flex;
      align-items: baseline;
      margin-top: 43px;
      margin-bottom: 42px;
      h2 {
        font-size: 22px;
        font-weight: 600;
        line-height: 30px;
        margin-right: 40px;
      }
      a {
        position: relative;
        display: inline-block;
        height: 20px;
        line-height: 20px;
        margin-right: 34px;
        font-weight: 300;
        color: #333;
        z-index: 1;
        cursor: pointer;
        &.active {
          &::after {
            position: absolute;
            content: "";
            left: 0;
            bottom: 1px;
            width: 100%;
            height: 6px;
            background: $color-theme;
            opacity: 0.5;
            z-index: -1;
          }
        }
      }
    }
    .content {
      .singer-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        margin: 30px -15px 0;
      }
    }
  }
}
</style>
