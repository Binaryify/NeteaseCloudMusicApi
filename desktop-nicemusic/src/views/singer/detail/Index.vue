<template>
  <div class="singer-detail">
    <div class="singer-info">
      <div class="top">
        <div class="top-mask">
          <div class="singer-box flex-column flex-center">
            <div class="avatar transition">
              <img :src="detail.img1v1Url + '?param=200y200'" />
              <div class="level flex-center transition" v-show="level">
                <i class="iconfont icon-level" :class="level"></i>
              </div>
            </div>
            <p class="nickname">
              {{ detail.name }}
              <i class="iconfont" :class="gender"></i>
            </p>
            <div class="follow flex-center transition">
              <i class="iconfont niceIcon_add"></i>
              关注TA
            </div>
            <div class="desc ellipsis-two" v-html="detail.briefDesc"></div>
            <ul class="info flex-center">
              <li>
                <p class="num">{{ detail.musicSize }}</p>
                <p class="text">单曲数</p>
              </li>
              <li>
                <p class="num">{{ detail.albumSize }}</p>
                <p class="text">专辑数</p>
              </li>
              <li>
                <p class="num">{{ detail.mvSize }}</p>
                <p class="text">MV数</p>
              </li>
              <li v-show="detail.followeds">
                <p class="num">{{ detail.followeds }}</p>
                <p class="text">粉丝</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-trangle"></div>
      </div>
      <div class="bottom container">
        <ul class="nav flex-center">
          <li
            v-for="item of navList"
            :key="item.id"
            :class="active == item.id ? 'active' : ''"
            @click="tabItem(item.id)"
          >
            {{ item.name }}
          </li>
        </ul>
        <div class="content">
          <artist-list :songs="songs" :isPerson="isPerson" v-if="active == 1" />
          <album-list :albums="albums" v-if="active == 2" />
          <mv-list :mvs="mvs" type="mv" v-if="active == 3" />
          <div class="info-box" v-if="active == 4">
            <h2 class="title">{{ detail.name }}简介</h2>
            <div class="profile" v-html="singerDesc.briefDesc"></div>
            <div class="introduction">
              <div
                class="item"
                v-for="item of singerDesc.introduction"
                :key="item.ti"
              >
                <h3 class="sub-title">{{ item.ti }}</h3>
                <p v-html="item.txt"></p>
              </div>
            </div>
          </div>
          <div class="simi-box" v-if="active == 5">
            <ul class="singer-list" v-if="singers.length > 0">
              <singer-item
                v-for="item of singers"
                :key="item.id"
                :item="item"
              />
            </ul>
            <nice-empty v-else></nice-empty>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { createSong } from '@/model/song'
import { createVideo } from '@/model/video'
import ArtistList from 'components/common/artistList/Index'
import AlbumList from 'components/common/albumList/Index'
import MvList from 'components/common/mvList/Index'
import SingerItem from 'components/common/singerItem/Index'
export default {
  data() {
    return {
      // 歌手基本信息
      singerDetail: {},
      // 歌手用户信息
      userDetail: {},
      // 歌手简介
      singerDesc: {},
      // 热门单曲
      songs: [],
      // 专辑
      albums: [],
      // 相似歌手
      singers: [],
      // 歌手MV
      mvs: [],
      // 歌手id
      singerId: '',
      // 模块
      navList: [
        {
          name: '作品',
          id: 1
        },
        {
          name: '专辑',
          id: 2
        },
        {
          name: 'MV',
          id: 3
        },
        {
          name: '歌手详情',
          id: 4
        },
        {
          name: '相似歌手',
          id: 5
        }
      ],
      // 当前显示模块
      active: 1,
      // 分页显示条数
      limit: 20,
      // 分页偏移
      offset: 0,
      isPerson: true
    }
  },
  components: {
    ArtistList,
    AlbumList,
    MvList,
    SingerItem
  },
  computed: {
    ...mapGetters(['singer']),
    // 合并歌手详情
    detail() {
      return Object.assign(this.singerDetail, this.userDetail)
    },
    // 设置歌手性别
    gender() {
      if (this.detail.gender > 0) {
        return this.detail.gender === 1
          ? 'niceCRM_icon_nanxing man'
          : 'niceCRM_icon_nvxing woman'
      } else {
        return ''
      }
    },
    // 设置歌手等级
    level() {
      if (this.detail.level > 0) {
        return 'nicelevel-' + this.detail.level
      } else {
        return ''
      }
    }
  },
  watch: {
    $route() {
      let id = this.$route.query.id || this.singer.id
      if (id) {
        this._initialize(id)
      }
    }
  },
  methods: {
    // 切换歌手信息
    tabItem(id) {
      this.active = id
    },
    // 获取歌手基本信息和热门50首单曲
    async getArtists(id) {
      try {
        let res = await this.$api.getArtists(id)
        if (res.code === 200) {
          this.singerDetail = res.artist
          this.getUserDetail(res.artist.accountId)
        }
        this.songs = this._normalizeSongs(res.hotSongs)
        this.getArtistAlbum(id)
        this.getArtistMv(id)
      } catch (error) {
        console.log(error)
      }
    },
    // 获取(歌手)用户信息
    async getUserDetail(uid) {
      let detail = {}
      try {
        let res = await this.$api.getUserDetail(uid)
        let profile = res.profile
        if (res.code === 200) {
          detail.level = res.level
          detail.followeds = profile.followeds
          detail.gender = profile.gender
          this.userDetail = detail
        }
      } catch (error) {
        detail.level = ''
        detail.followeds = ''
        detail.gender = ''
        this.userDetail = detail
      }
    },
    // 获取歌手专辑
    async getArtistAlbum(id) {
      let params = {
        id: this.singerId || id,
        limit: this.detail.albumSize,
        offset: this.offset
      }
      try {
        let res = await this.$api.getArtistAlbum(params)
        if (res.code === 200) {
          this.albums = res.hotAlbums
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取歌手MV
    async getArtistMv(id) {
      let params = {
        id: this.singerId || id,
        limit: this.detail.mvSize,
        offset: this.offset
      }
      try {
        let res = await this.$api.getArtistMv(params)
        if (res.code === 200) {
          this.mvs = this._normalizeVideos(res.mvs)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取歌手简介
    async getArtistDesc(id) {
      try {
        let res = await this.$api.getArtistDesc(id)
        if (res.code === 200) {
          if (res.introduction.length > 0) {
            res.introduction.map(item => {
              item.txt = item.txt.replace(/(\r\n|\n|\r)/gm, '<br />')
            })
          }
          this.singerDesc = res
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取相似歌手
    async getArtistSimi(id) {
      try {
        let res = await this.$api.getArtistSimi(id)
        if (res.code === 200) {
          this.singers = res.artists
        }
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
        if (item.id) {
          ret.push(
            createVideo({
              id: item.id,
              nickName: item.artistName,
              name: item.name,
              playCount: item.playCount,
              duration: item.duration,
              image: item.imgurl16v9
            })
          )
        }
      })
      return ret
    },
    //初始化
    _initialize(id) {
      this.active = 1
      this.albumOffset = 0
      this.mvOffset = 0
      this.albums = []
      this.mvs = []
      this.singerId = Number(id)
      this.getArtists(id)
      this.getUserDetail(id)
      this.getArtistDesc(id)
      this.getArtistSimi(id)
    }
  },
  created() {
    let id = this.$route.query.id || this.singer.id
    if (id) {
      this._initialize(id)
    }
  },
  mounted() {}
}
</script>
<style lang="stylus" scoped>
.avatar >>> img {
  border-radius: 5px;
}
.singer-detail {
  margin-top: -20px;
  .singer-info {
    .top {
      position: relative;
      width: 100%;
      height: 580px;
      background: url(../../../assets/images/top-bg.jpg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .top-mask {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        .singer-box {
          height: 100%;
          position: relative;
          margin: 0 auto;
          padding-top: 10px;
          text-align: center;
          z-index: 2;
          .avatar {
            width: 120px;
            height 120px;
            border-radius: 50%;
            position: relative;
            overflow: hidden;
            .level {
              width: 100%;
              height: 25px;
              position: absolute;
              left: 0;
              right: 0;
              bottom: 0;
              background: rgba(255, 255, 255, 0.8);
              .icon-level {
                font-size: 25px;
                color: $color-theme;
                margin-left: 8px;
              }
            }
            img {
              width: 120px;
              height 120px;
              border-radius: 50%;
              background: #fff;
              border: 3px solid rgba(255, 255, 255, 0.6);
            }
            &:hover {
              box-shadow: 0px 5px 20px 0px rgba(255, 255, 255, 0.8);
            }
          }
          .nickname {
            margin-top: 20px;
            font-size: 24px;
            font-weight: 700;
            color: #fff;
            line-height: 24px;
            i {
              font-size: 20px;
              &.man {
                color: #1f91f2;
              }
              &.woman {
                color: #fc7265;
              }
            }
          }
          .follow {
            margin: 24px 0 30px;
            padding: 0;
            height: 36px;
            width: 96px;
            font-size: 12px;
            line-height: 36px;
            color: #fff;
            border: 1px solid rgba(255, 255, 255, 0.6);
            cursor: pointer;
            border-radius: 18px;
            &:hover {
              background: rgba(255, 255, 255, 0.1);
              border: 1px solid #fff;
            }
            i {
              margin-right: 5px;
            }
          }
          .desc {
            margin: 0 auto 24px;
            width: 740px;
            height: 48px;
            font-size: 14px;
            color: rgba(255,255,255,.6);
            line-height: 24px;
          }
          .info {
            margin: 0 auto;
            width: 100%;
            li {
              margin: 0 50px;
              text-align: center;
              .num {
                margin-bottom: 8px;
                font-size: 24px;
                line-height: 24px;
                color: #fff;
              }
              .text {
                font-size: 14px;
                line-height: 14px;
                color: rgba(255, 255, 255, 0.6);
              }
            }
          }
        }
      }
      .bottom-trangle {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 137px;
        background: url(../../../assets/images/arrow-lr.png);
        background-position: center;
        z-index: 1;
      }
    }
    .bottom {
      .nav {
        margin: 30px 0;
        li {
          margin: 0 20px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          &.active {
            color: $color-theme;
          }
        }
      }
      .content {
        background: #fff;
        .info-box {
          padding: 15px;
          .title {
            text-align: center;
            position: relative;
            margin-bottom: 30px;
            &::after {
              content: '';
              width: 40px;
              height: 2px;
              background: $color-theme;
              position: absolute;
              left: 50%;
              bottom: -10px;
              margin-left: -20px;
            }
          }
          .profile {
            line-height: 1.7;
            margin-bottom: 20px;
            text-align: center;
          }
          .introduction {
            .item {
              margin-bottom: 15px;
              .sub-title {
                margin-bottom: 10px;
              }
              p {
                line-height: 1.7
              }
            }
          }
        }
        .simi-box {
          padding: 15px 15px;
          .singer-list {
            display: flex;
            flex-wrap: wrap;
            margin-top: 30px;
            margin: 0px -15px 0;
          }
        }
      }
    }
  }
}
</style>
