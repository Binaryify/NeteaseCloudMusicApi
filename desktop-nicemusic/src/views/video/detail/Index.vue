<template>
  <div class="video-detail container">
    <div class="left shadow">
      <div class="video-container">
        <video
          :src="videoUrl"
          controls="controls"
          autoplay
          controlslist="nodownload"
        ></video>
      </div>
      <div class="video-foot">
        <h2 class="title flex-row">
          {{ detail.title }}
        </h2>
        <div class="tag">
          <a v-for="item of detail.videoGroup" :key="item.id"
            >#{{ item.name }}</a
          >
        </div>
        <p class="flex-row">
          <span
            >发布：{{
              utils.dateFormat(detail.publishTime, 'YYYY-MM-DD')
            }}</span
          >
          <span v-if="detail.playTime"
            >播放次数：{{ utils.tranNumber(detail.playTime, 1) }}</span
          >
        </p>
        <div class="follow">
          <div
            class="box"
            @click="likeResource"
            :class="videoDetailInfo.isLike ? 'active' : ''"
          >
            <i class="iconfont nicexihuan3 icon-like"></i>
            {{ videoDetailInfo.likeCount }}
          </div>
          <div class="box">
            <i class="iconfont niceshoucang2 icon-collection"></i>
            {{ detail.subscribeCount }}
          </div>
          <div class="box">
            <i class="iconfont nicefenxiang2 icon-share"></i>
            {{ videoDetailInfo.shareCount }}
          </div>
        </div>
      </div>
      <div class="comments">
        <div class="title flex-row">
          <i class="iconfont nicepinglun"></i>Comments |
          <span class="noticom"
            ><a>{{ videoDetailInfo.commentCount }} 条评论</a>
          </span>
        </div>
        <comment-box
          :currentCommentId="currentCommentId"
          @commentSubmit="commentSubmit"
          :clearContent="clearContent"
          v-if="currentCommentId == ''"
        />
        <comment-list
          title="精彩评论"
          :commentList="hotComments"
          :currentCommentId="currentCommentId"
          @commentHandle="commentHandle"
          @cancelComment="cancelComment"
          @commentSubmit="commentSubmit"
          @commentLike="commentLike"
          v-if="hotComments.length > 0"
        />
        <comment-list
          title="最新评论"
          :commentList="comments"
          :currentCommentId="currentCommentId"
          @commentHandle="commentHandle"
          @cancelComment="cancelComment"
          @commentSubmit="commentSubmit"
          @commentLike="commentLike"
        />
        <div class="page-wrap">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="limit"
            background
            hide-on-single-page
            layout="total, prev, pager, next"
            :total="commentTotal"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="profile module shadow">
        <div class="card-header flex-row">
          <span>视频简介</span>
        </div>
        <div class="content">
          <div class="author">
            <div class="avatar" @click="toUser(creator.userId)">
              <img :src="creator.avatarUrl" alt="" />
            </div>
            <p class="name" @click="toUser(creator.userId)">{{ creator.nickname }}</p>
            <!-- <div class="follow flex-center transition">
              <i class="iconfont niceIcon_add"></i>关注
            </div> -->
          </div>
          <p v-if="detail.description">{{ detail.description }}</p>
          <p v-else>视频暂无简介</p>
        </div>
      </div>
      <div class="related module shadow">
        <div class="card-header flex-row">
          <span>相关推荐</span>
        </div>
        <ul>
          <li v-for="item of relatedList" :key="item.vid">
            <div class="avatar">
              <img
                :src="item.coverUrl + '?param=320y180'"
                :alt="item.title"
                :title="item.title"
              />
              <div class="action">
                <button
                  class="play flex-center"
                  title="播放"
                  v-if="!item.isLive"
                  @click="toDetail(item.vid)"
                >
                  <i class="iconfont nicebofang1"></i>
                </button>
              </div>
            </div>
            <div class="info">
              <h2 class="ellipsis">{{ item.title }}</h2>
              <span v-for="author of item.creator" :key="author.userId"
                >By. <small> {{ author.userName }}</small></span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from 'components/common/commentList/Index.vue'
import CommentBox from 'components/common/commentBox/Index.vue'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // 歌单详情
      detail: {},
      creator: {},
      // 相关视频
      relatedList: [],
      // 评论
      hotComments: [],
      comments: [],
      currentCommentId: '',
      videoUrl: '',
      currentPage: 0,
      limit: 20,
      offset: 0,
      videoId: '',
      commentTotal: 0,
      // 是否清空评论框内容
      clearContent: false,
      // 资源点赞数据
      videoDetailInfo: {}
    }
  },
  components: {
    CommentList,
    CommentBox
  },
  computed: {
    ...mapGetters(['userInfo', 'loginStatu'])
  },
  watch: {
    $route() {
      let id = this.$route.query.id || this.videoId
      if (id) {
        this._initialize(id)
      }
    }
  },
  methods: {
    // 改变页码
    handleSizeChange(val) {
      this.limit = val
      this.offset = this.limit * this.currentPage
      this.getVideoComments(this.videoId)
    },
    // 改变页码
    handleCurrentChange(val) {
      this.currentPage = val
      this.offset = (val - 1) * this.limit
      this.getVideoComments(this.videoId)
    },
    // 点击评论
    commentHandle(id) {
      this.currentCommentId = id
    },
    // 提交评论
    async commentSubmit(content) {
      if (!content) {
        this.$message.error('什么都没写，你点毛')
        return
      } else {
        let timestamp = new Date().getTime()
        let params = {
          type: 5,
          id: this.videoId,
          content: content,
          timestamp
        }
        if (this.currentCommentId == '') {
          // 发布评论
          params.t = 1
        } else {
          // 回复评论
          params.t = 2
          params.commentId = this.currentCommentId
        }
        let res = await this.$api.sendComment(params)
        if (res.code === 200) {
          this.$message({
            message: '提交成功',
            type: 'success'
          })
          this.cancelComment()
          this.clearContent = true
          this.getVideoComments(this.videoId)
        }
      }
    },
    // 取消评论
    cancelComment() {
      this.currentCommentId = ''
    },
    // 评论点赞
    async commentLike(id, liked) {
      let timestamp = new Date().getTime()
      let params = {
        id: this.videoId,
        cid: id,
        type: 5,
        timestamp
      }
      if (liked) {
        params.t = 0
      } else {
        params.t = 1
      }
      try {
        let res = await this.$api.likeComment(params)
        if (res.code === 200) {
          this.getVideoComments(this.videoId)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 资源点赞
    async likeResource() {
      let type = 5
      let t = 1
      if (this.videoDetailInfo.isLike) {
        t = 2
      } else {
        t = 1
      }
      let id = this.videoId
      try {
        let res = await this.$api.likeResource(type, t, id)
        if (res.code === 200) {
          this.getVideoDetailInfo(this.videoId)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取视频播放地址
    async getVideoUrl(id) {
      try {
        let res = await this.$api.getVideoUrl(id)
        if (res.code === 200) {
          this.videoUrl = res.urls[0].url
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取视频详情
    async getVideoDetail(id) {
      try {
        let res = await this.$api.getVideoDetail(id)
        if (res.code === 200) {
          res.data.videoGroup.map(item => {
            if (item.name.indexOf('#') != -1) {
              item.name = item.name.replace(/#/g, '')
            }
          })
          this.detail = res.data
          this.creator = res.data.creator
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取视频点赞转发评论数数据
    async getVideoDetailInfo(id) {
      try {
        let res = await this.$api.getVideoDetailInfo(id, new Date().getTime())
        if (res.code === 200) {
          let detail = {
            isLike: res.liked,
            likeCount: res.likedCount,
            shareCount: res.shareCount,
            commentCount: res.commentCount
          }
          this.videoDetailInfo = detail
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 获取相关视频
    async getVideoRelated(id) {
      try {
        let res = await this.$api.getVideoRelated(id)
        if (res.code === 200) {
          this.relatedList = res.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 视频评论
    async getVideoComments(id) {
      let timestamp = new Date().getTime()
      let params = {
        id,
        limit: this.limit,
        offset: this.offset,
        timestamp
      }
      try {
        let res = await this.$api.getVideoComments(params)
        if (res.code === 200) {
          this.commentTotal = res.total
          if (res.hotComments) {
            this.hotComments = res.hotComments
          } else {
            this.hotComments = []
          }
          this.comments = res.comments
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 视频详情（相关视频）
    toDetail(id) {
      this.$router.push({
        name: 'videoDetail',
        query: {
          id
        }
      })
    },
    toUser(id) {
      this.$router.push({
        name: 'personal',
        query: {
          id
        }
      })
    },
    // 初始化
    _initialize(id) {
      this.getVideoUrl(id)
      this.getVideoDetail(id)
      this.getVideoRelated(id)
      this.getVideoDetailInfo(id)
      this.getVideoComments(id)
    }
  },
  created() {},
  mounted() {
    let id = this.$route.query.id
    if (id) {
      this.videoId = id
      this._initialize(id)
    }
  }
}
</script>
<style lang="stylus" scoped>
.video-detail {
  display: flex;
  .left {
    flex: 1;
    width: 950px;
    padding: 15px;
    border-radius: 8px;
    margin-right: 20px;
    .title {
      margin-bottom: 10px;
      position: relative;
      i {
        font-size: 24px;
        margin-top: 1px;
        margin-left: -3px;
        color: $color-theme;
      }
    }
    .video-container {
      position: relative;
      padding-top: 56.25%;
      video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #000;
      }
    }
    .video-foot {
      margin-top: 8px;
      .tag {
        margin-bottom: 8px;
        a {
          font-size: 12px;
          color: $color-theme;
          margin-right: 10px;
          cursor: pointer;
        }
      }
      p {
        span {
          margin-right: 30px;
          font-size: 12px;
          color: #999;
        }
      }
      .follow {
        display: flex;
        margin-top: 10px;
        .box {
          width: auto;
          border-radius: 15px;
          padding: 0px 15px;
          background: #f2f2f2;
          margin-right: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #161e27;
          cursor: pointer;
          i {
            font-size: 26px;
            color: #161e27;
          }
          &.active {
            color: #fff;
            background: $color-theme;
            .icon-like {
              color: #fff;
            }
          }
        }
      }
    }
    .comments {
      margin-top: 25px;
      .title {
        width: 100%;
        height: 50px;
        // background: #f8f8f8;
        border-radius: 3px;
        padding: 0 3px;
        border-bottom: 1px solid #f1f1f1;
        i {
          color: #666;
          font-size: 18px;
          margin-right: 10px;
        }
        span {
          margin-left: 5px;
        }
      }
      .comment-box {
        margin-top: 20px;
        p {
          i {
            margin-right: 10px;
          }
          span {
            flex: 1;
          }
          .cancel-comment {
            color: #d9dfff;
            font-size: 12px;
            background: none;
            padding: 6px 10px;
            border-radius: 2px;
            border: 1px solid #dee3ff;
            cursor: pointer;
          }
        }
        .comment-form {
          display: flex;
          margin-top: 1.5em;
          .avatar {
            width: 50px;
            height: 50px;
            border-radius: 3px;
            margin-right: 20px;
            position: relative;
            flex-shrink: 0;
            img {
              width: 100%;
              border-radius: 3px;
            }
          }
          .comarea {
            flex: 1;
            textarea {
              width: 100%;
              outline: none;
              background: #f8f9ff;
              resize: none;
              padding: 6px 12px;
              color: #666;
              border: 1px solid #eaebff;
              border-radius: 3px;
              font-size: 13px;
              height: 80px;
            }
          }
        }
      }
      .comment-foot {
        margin-top: 15px;
        .comment-btn {
          color: #fff;
          padding: 10px 30px;
          font-size: .75rem;
          border-radius: 3px;
          border: none;
          cursor: pointer;
          outline: none;
          background: #FF416C;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }
      }
      .page-wrap {
        margin-top: 20px;
      }
    }
  }
  .right {
    width: 350px;
    flex-shrink: 0;
    .module {
      padding: 15px;
      width: 100%;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .profile {
      .author {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        margin-top: 5px;
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin-right: 15px;
          cursor: pointer;
          img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
          }
        }
        p {
          flex: 1;
          cursor: pointer;
        }
        .follow {
          padding: 3px 10px;
          font-size: 12px;
          background: $color-theme;
          color: #ffffff;
          border: 1px solid $color-theme;
          cursor: pointer;
          border-radius: 18px;
          &:hover {
            background: none;
            color: $color-theme;
          }
        }
      }
    }
    .related {
      padding-bottom: 5px;
      ul {
        li {
          display: flex;
          flex-direction: column;
          margin-bottom: 15px;
          .avatar {
            width: 100%;
            margin-right: 15px;
            flex-shrink: 0;
            position: relative;
            img {
              width: 100%;
            }
            .action {
              display: none;
              position: absolute;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              .play {
                width: 32px;
                height: 32px;
                padding: 0;
                border: none;
                border-radius: 50%;
                color: #fff;
                cursor: pointer;
                background-color: $color-theme;
                i {
                  font-size: 12px;
                }
              }
            }
          }
          .info {
            height: 50px;
            width: calc(100% - 50px);
            flex: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            h2 {
              font-size: 14px;
              margin-bottom: 3px;
              margin-top: 5px;
              width: 100%;
              min-height: 20px;
            }
            span {
              font-size: 12px;
              color: #a5a5c1;
            }
          }
          &:hover {
            .action {
              display: flex;
            }
          }
        }
      }
    }
    .comment {
      ul {
        li {
          padding: 10px 0;
          width: 100%;
          display: flex;
          .avatar {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin-right: 12px;
            flex-shrink: 0;
            img {
              width: 100%;
              border-radius: 50%;
            }
          }
          .info {
            flex: 1;
            h2 {
              font-size: 15px;
              margin-right: 5px;
              margin-bottom: 10px;
              small {
                font-size: 12px;
                color: #a5a5c1;
                font-weight: 200;
              }
            }
            p {
              width: 100%;
              font-size: 12px;
              color: #666666;
              line-height: 1.6;
              padding: 5px 10px;
              background: #f5f5f5;
              margin-top: 5px;
              border-radius: 3px;
            }
          }
        }
      }
    }
    .card-header {
      border-left: 3px solid $color-theme;
      height: 20px;
      padding-left: 1rem;
      margin-bottom: 15px;
      font-weight: bold;
      .icon-like {
        font-size: 20px;
        &.active {
          color: $color-theme;
        }
      }
    }
  }
}
</style>
