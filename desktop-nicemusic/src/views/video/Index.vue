<template>
  <div class="video-wrap container">
    <div class="filter shadow">
      <div class="title flex-center" @click="openFilter">
        {{ currentCat }}
        <i class="iconfont niceiconfontyoujiantou-copy-copy-copy-copy"></i>
        <transition name="fade">
          <div class="filter-box shadow" v-if="showFilter">
            <ul>
              <li
                v-for="item of tags"
                :key="item.id"
                :class="currentCat == item.name ? 'active' : ''"
                @click="chooseCat(item.id, item.name)"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="hot-tag flex-row">
        <p>分类：</p>
        <ul class="flex-center">
          <li
            v-for="item of hotCategories"
            :key="item.id"
            :class="currentCat == item.name ? 'active' : ''"
            @click="chooseCat(item.id, item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div
        class="all"
        :class="currentCat == '全部' ? 'active' : ''"
        @click="chooseCat('', '全部')"
      >
        全部
      </div>
    </div>
    <mv-list :mvs="videos" v-loading="fullscreenLoading"></mv-list>
    <div class="page flex-center">
      <button
        :disabled="offset == 0"
        class="btn flex-center trainsition"
        @click="prev"
      >
        上一页
      </button>
      <button
        :disabled="!hasmore"
        class="btn flex-center trainsition"
        @click="next"
      >
        下一页
      </button>
    </div>
  </div>
</template>

<script>
import { createVideo } from '@/model/video'
import MvList from 'components/common/mvList/Index'
export default {
  data() {
    return {
      currentCat: '全部',
      currentId: '',
      hotCategories: [],
      tags: [],
      videos: [],
      offset: 0,
      hasmore: true,
      showFilter: false,
      fullscreenLoading: false
    }
  },
  components: {
    MvList
  },
  computed: {},
  watch: {},
  methods: {
    // 展开视频标签
    openFilter() {
      this.showFilter = !this.showFilter
    },
    // 下一页
    next() {
      this.offset += 1
      if (this.currentId) {
        this.getVideoOther(this.currentId)
      } else {
        this.getVideoAll()
      }
    },
    // 上一页
    prev() {
      this.offset -= 1
      if (this.currentId) {
        this.getVideoOther(this.currentId)
      } else {
        this.getVideoAll()
      }
    },
    // 获取视频分类列表
    async getVideoCategory() {
      try {
        let res = await this.$api.getVideoCategory()
        if (res.code === 200) {
          let list = res.data.filter(item => {
            return item.id !== 1000
          })
          this.hotCategories = list
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取视频标签列表
    async getVideoTag() {
      try {
        let res = await this.$api.getVideoTag()
        if (res.code === 200) {
          let list = res.data.filter(item => {
            return item.id !== 1000
          })
          this.tags = list
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取全部视频列表
    async getVideoAll() {
      this.fullscreenLoading = true
      try {
        let res = await this.$api.getVideoAll(this.offset)
        if (res.code === 200) {
          this.videos = this._normalizeVideos(res.datas)
          this.fullscreenLoading = false
          if (res.hasmore) {
            this.hasmore = true
          } else {
            this.hasmore = false
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取视频标签/分类下的视频
    async getVideoOther(id) {
      try {
        let res = await this.$api.getVideoOther(id, this.offset)
        if (res.code === 200) {
          this.videos = this._normalizeVideos(res.datas)
          if (res.hasmore) {
            this.hasmore = true
          } else {
            this.hasmore = false
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 处理视频
    _normalizeVideos(list) {
      let ret = []
      list.map(item => {
        let res = item.data
        let liveRes = item.data.liveData
        if (res.vid) {
          ret.push(
            createVideo({
              id: res.vid,
              nickName: res.creator.nickname,
              name: res.title,
              playCount: res.playTime,
              duration: res.durationms,
              image: res.coverUrl,
              isLive: false
            })
          )
        } else {
          ret.push(
            createVideo({
              id: liveRes.liveRoom.liveRoomNo,
              nickName: liveRes.liveUser.nickName,
              name: liveRes.liveRoom.title,
              playCount: liveRes.liveRoom.popularity,
              duration:
                liveRes.liveRoom.liveStatus == 1 ? '正在直播' : '直播已关闭',
              image: liveRes.liveRoom.coverUrl,
              isLive: true
            })
          )
        }
      })
      return ret
    },
    // 选择分类
    chooseCat(id, name) {
      this.offset = 0
      this.hasmore = true
      this.currentCat = name
      if (id) {
        this.currentId = id
        this.getVideoOther(id)
      } else {
        this.getVideoAll()
      }
    }
  },
  created() {},
  mounted() {
    this.getVideoCategory()
    this.getVideoTag()
    this.getVideoAll()
  }
}
</script>
<style lang="stylus" scoped>
.fade-enter {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
}

.fade-enter-active {
  transition: all 0.5s;
}

.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 30px, 0);
}

.fade-leave-active {
  transition: all 0.5s;
}
.video-wrap {
  .filter {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-right: 20px;
    border-radius: 5px 0px 5px 5px;

    .title {
      width: auto;
      height: 100%;
      padding: 0 5px 0 15px;
      background: $color-theme;
      border-radius: 5px 0px 5px 5px;
      color: #ffffff;
      cursor: pointer;
      position: relative;
      margin-right: 15px;
      position: relative;
      &::after {
        content: ''
        width: 1px;
        height: 20px;
        margin-left: 12px;
        background: #e7e7e7;
        opacity: 0;
      }
      > i {
        transform: rotate(90deg);
        margin-left: 10px;
        font-size: 18px;
      }

      .filter-box {
        width: 720px;
        height: 400px;
        overflow-y: scroll;
        background: rgba(255, 255, 255, 1);
        border-radius: 5px;
        color: #000;
        position: absolute;
        right: -631px;
        top: 50px;
        z-index: 100;
        padding: 15px 10px 0 16px;
        ul {
          display: flex;
          flex-wrap: wrap;
          li {
            padding: 8px 18px;
            background: #f7f7f7;
            border-radius: 16px;
            margin: 0 10px 10px 0;
            cursor: pointer;
            font-size: 12px;
            color: #161e27;
            transition: all 0.4s;
            &:hover {
              color: #fff;
              background: $color-theme;
            }
            &.active {
              color: #fff;
              background: $color-theme;
            }
          }
        }
      }

      &:hover {
        // border: 1px solid #cccccc;
      }
    }
    .hot-tag {
      flex: 1;
      ul {
        li {
          margin: 0 5px;
          padding-right: 10px;
          cursor: pointer
          &:hover {
            color: #888;
          }
          &.active {
            color: $color-theme;
          }
        }
      }
    }
    .all {
      background: #f7f7f7;
      color: #161e27;
      padding: 5px 10px;
      font-size: 12px;
      border-radius: 3px;
      transition: all 0.4s;
      cursor: pointer;
      &.active {
        background: $color-theme;
        color: #fff;
      }
    }
  }
  .page {
    .btn {
      padding: 7px 10px;
      border-radius: 3px;
      background: $color-theme;
      color: #ffffff;
      margin: 0 10px;
      cursor: pointer;
      border: 0;
      &.active {
        background: $color-theme;
        color: #ffffff;
      }
      &:hover {
        background: $color-theme;
        color: #ffffff;
      }
      &:disabled {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
      }
    }
  }
}
</style>
