<template>
  <div class="album-box">
    <ul class="album-list flex-row">
      <li v-for="item of albums" :key="item.id" @click="toDetail(item.id)">
        <div class="wrapper">
          <div class="cover">
            <div class="image">
              <el-image
                :key="item.picUrl + '?param=300y300'"
                :src="item.picUrl + '?param=300y300'"
                lazy
              >
                <div
                  slot="placeholder"
                  class="image-slot flex-center flex-column"
                >
                  <i class="iconfont niceicon-3"></i>
                </div>
                <div slot="error" class="image-slot flex-center">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </div>
            <div class="count">
              <i class="arrow"></i>
              <span>{{ item.subType || item.type }}</span>
            </div>
            <div class="action">
              <button class="play flex-center" title="播放">
                <i class="iconfont nicebofang1"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="name ellipsis">{{ item.name }}</div>
          <div class="author">{{ item.artist.name }}</div>
          <div class="time author">
            {{ utils.dateFormat(item.publishTime, 'YYYY-MM-DD') }}
          </div>
        </div>
      </li>
    </ul>
    <div v-if="loadStatus" class="load-bottom">
      <nice-loading />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    albums: {
      type: Array
    },
    loadStatus: {
      type: Boolean
    },
    loading: {
      type: Boolean
    }
  },
  components: {},
  computed: {
    noMore() {
      return !this.loading
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  watch: {},
  methods: {
    toDetail(id) {
      this.$router.push({
        name: 'albumDetail',
        query: {
          id
        }
      })
    }
  },
  created() {},
  mounted() {}
}
</script>
<style lang="stylus" scoped>
.album-box {
  padding: 15px 0;
  .album-list {
    flex-wrap: wrap;
    li {
      padding: 0 15px 30px;
      flex: 0 0 16.666667%;
      max-width: 16.666667%;
      cursor: pointer;
      .wrapper {
        position: relative;
        padding-right: 10px;
        overflow: hidden;
        .cover {
          position: relative;
          z-index: 2;
          padding-top: 100%;
          border-radius: 2px;
          background-color: #d9d9d9;
          .image {
            position: absolute;
            top: 0;
            left: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
            border-radius: 2px;
            img {
              position: absolute;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%);
              width: 100%;
            }
          }
          .count {
            position: absolute;
            right: 16px;
            top: 1px;
            height: 24px;
            padding-left: 9px;
            background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 0;
            background-size: cover;
            color: #fff;
            font-size: 12px;
            font-weight: 700;
            line-height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            .arrow {
              display: block;
              width: 0;
              height: 0;
              border-style: solid;
              border-width: 4px 0 4px 6px;
              border-color: transparent transparent transparent #ffffff;
              margin-right: 5px;
            }
            &:after {
              content: '';
              position: absolute;
              right: -14px;
              top: 0;
              width: 14px;
              height: 24px;
              background: url(https://img.alicdn.com/tfs/TB1xEGRub9YBuNjy0FgXXcxcXXa-268-48.png) no-repeat 100%;
              background-size: cover;
            }
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
          // &:hover {
          //   .action {
          //     display: flex;
          //   }
          // }
        }
        &::after {
          content: '';
          position: absolute;
          z-index: 1;
          right: 3px;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          width: 100%;
          padding-top: 100%;
          background-color: #000;
          border-radius: 50%;
          transition: all 0.4s;
        }
        &:hover {
          &::after {
            right: 0px;
          }
        }
      }
      .info {
        margin-top: 15px;
        .name {
          font-weight: 700;
          line-height: 18px;
        }
        .author {
          margin-top: 5px;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
}
</style>
