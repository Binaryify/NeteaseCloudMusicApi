<template>
  <div class="mv-wrap container">
    <div class="filter">
      <ul class="tag-lang">
        <li
          v-for="item of areaList"
          :key="item.value"
          :class="area == item.value ? 'active' : ''"
          @click="chooseType('area', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul class="tag-lang tag-type">
        <li
          v-for="item of classifys"
          :key="item.value"
          :class="classify == item.value ? 'active' : ''"
          @click="chooseType('classify', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul class="tag-lang">
        <li
          v-for="item of sortList"
          :key="item.value"
          :class="sort == item.value ? 'active' : ''"
          @click="chooseType('sort', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <load-more @scroll-state="load">
      <mv-list :mvs="mvs" type="mv"></mv-list>
    </load-more>
    <div v-if="loading" class="load-bottom">
      <nice-loading />
    </div>
  </div>
</template>

<script>
import { createVideo } from '@/model/video'
import MvList from 'components/common/mvList/Index'
import loadMore from 'components/common/loadMore/Index'
export default {
  data() {
    return {
      // 语种
      area: '全部',
      areaList: [
        {
          value: '全部',
          label: '全部'
        },
        {
          value: '内地',
          label: '内地'
        },
        {
          value: '港台',
          label: '港台'
        },
        {
          value: '欧美',
          label: '欧美'
        },
        {
          value: '日本',
          label: '日本'
        },
        {
          value: '韩国',
          label: '韩国'
        }
      ],
      // 分类
      classify: '全部',
      classifys: [
        {
          value: '全部',
          label: '全部'
        },
        {
          value: '官方版',
          label: '官方版'
        },
        {
          value: '原生',
          label: '原生'
        },
        {
          value: '现场版',
          label: '现场版'
        },
        {
          value: '网易出品',
          label: '网易出品'
        }
      ],
      // 排序
      sort: '上升最快',
      sortList: [
        {
          value: '上升最快',
          label: '上升'
        },
        {
          value: '最热',
          label: '最热'
        },
        {
          value: '最新',
          label: '最新'
        }
      ],
      // 请求参数
      params: {
        // 返回数量
        limit: 12,
        // 偏移数量
        offset: 0,
        // 分类
        type: '全部',
        // 语种
        area: '全部',
        order: '上升最快'
      },
      mvs: [],
      // 是否显示加载动画
      loading: false,
      // 是否还有数据
      loadStatus: true
    }
  },
  components: {
    MvList,
    loadMore
  },
  watch: {},
  methods: {
    // 选择歌手分类
    chooseType(type, val) {
      if (type == 'area') {
        this.area = val
        this.params.area = val
      } else if (type == 'classify') {
        this.classify = val
        this.params.type = val
      } else if (type == 'sort') {
        this.en = val
        this.params.order = val
      }
      this.params.offset = 0
      this.loadStatus = true
      this.mvs = []
      this.getMvAll()
    },
    // 获取mv列表
    async getMvAll() {
      this.fullscreenLoading = true
      try {
        this.loadStatus = false
        let res = await this.$api.getMvAll(this.params)
        if (res.code === 200) {
          console.log(res)
          this.mvs = this.mvs.concat(this._normalizeVideos(res.data))
          if (res.hasMore) {
            this.loading = true
            this.loadStatus = true
            this.params.offset += 12
          } else {
            this.loading = false
          }
        }
      } catch (error) {
        this.$message.error(error)
      }
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
              image: item.cover
            })
          )
        }
      })
      return ret
    },
    // 加载更多
    load() {
      if (this.loadStatus) {
        setTimeout(() => {
          this.getMvAll()
        }, 1000)
      }
    }
  },
  created() {},
  mounted() {
    this.getMvAll()
  }
}
</script>
<style lang="stylus" scoped>
.mv-wrap {
  // height: 100vh;
  margin-top: -20px;
  li {
    &:hover {
      color: $color-theme;
      transition: all 0.4s;
    }
  }
  .tag-en {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      width: 56px;
      height: 28px;
      margin-right: 14px;
      text-align: center;
      line-height: 29px;
      border-radius: 50%;
      font-size: 13px;
      color: #333333;
      cursor: pointer;
      &:first-child,
      &.last-child {
        width: 56px;
        border-radius: 14px;
      }
      &.active {
        background: $color-theme;
        font-weight: 700;
        color: #ffffff;
      }
      &:hover {
        color: $color-theme;
        transition: all 0.4s;
      }
    }
  }
  .tag-lang {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    li {
      width: 56px;
      height: 28px;
      line-height: 29px;
      font-size: 13px;
      text-align: center;
      border-radius: 14px;
      cursor: pointer;
      margin-right: 6px;
      &.active {
        background: $color-theme;
        font-weight: 700;
        color: #ffffff;
      }
    }
  }
  .tag-type {
    li {
      width: auto;
      padding: 0 15px;
    }
  }
  .singer-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin: 30px -15px 0;
  }
}
</style>
