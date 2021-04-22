<template>
  <div class="singer-wrap container">
    <div class="filter">
      <ul class="tag-lang">
        <li
          v-for="item of langs"
          :key="item.value"
          :class="lang == item.value ? 'active' : ''"
          @click="chooseType('lang', item.value)"
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
      <ul class="tag-en">
        <li
          v-for="item of ens"
          :key="item.value"
          :class="en == item.value ? 'active' : ''"
          @click="chooseType('en', item.value)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <load-more @scroll-state="load">
      <ul class="singer-list">
        <singer-item v-for="item of singers" :key="item.id" :item="item" />
      </ul>
    </load-more>
    <div v-if="loading" class="load-bottom">
      <nice-loading />
    </div>
  </div>
</template>

<script>
import SingerItem from 'components/common/singerItem/Index'
import loadMore from 'components/common/loadMore/Index'
export default {
  data() {
    return {
      // 语种
      lang: -1,
      langs: [
        {
          value: -1,
          label: '全部'
        },
        {
          value: 7,
          label: '华语'
        },
        {
          value: 96,
          label: '欧美'
        },
        {
          value: 8,
          label: '日本'
        },
        {
          value: 16,
          label: '韩国'
        },
        {
          value: 0,
          label: '其他'
        }
      ],
      // 分类
      classify: -1,
      classifys: [
        {
          value: -1,
          label: '全部'
        },
        {
          value: 1,
          label: '男歌手'
        },
        {
          value: 2,
          label: '女歌手'
        },
        {
          value: 3,
          label: '乐队'
        }
      ],
      // 字母A_Z
      en: -1,
      ens: [],
      // 请求参数
      params: {
        // 返回数量
        limit: 40,
        // 偏移数量
        offset: 0,
        // 分类
        type: -1,
        // 语种
        area: -1,
        // 字母A_Z
        initial: -1
      },
      // 歌手列表
      singers: [],
      // 是否显示加载动画
      loading: false,
      // 是否还有数据
      loadStatus: true
    }
  },
  components: {
    SingerItem,
    loadMore
  },
  watch: {},
  methods: {
    // 获取筛选列表
    getEn() {
      let ens = []
      for (let i = 0; i < 26; i++) {
        ens.push({
          value: String.fromCharCode(97 + i),
          label: String.fromCharCode(65 + i)
        })
      }
      ens.unshift({
        value: -1,
        label: '热门'
      })
      ens.push({
        value: 0,
        label: '其他'
      })
      this.ens = ens
    },
    // 选择歌手分类
    chooseType(type, val) {
      if (type == 'lang') {
        this.lang = val
        this.params.area = val
      } else if (type == 'classify') {
        this.classify = val
        this.params.type = val
      } else if (type == 'en') {
        this.en = val
        this.params.initial = val
      }
      this.params.offset = 0
      this.loadStatus = true
      this.singers = []
      this.getSingerList()
    },
    // 获取歌手列表
    async getSingerList() {
      try {
        this.loadStatus = false
        let res = await this.$api.getSingerList(this.params)
        if (res.code === 200) {
          this.singers = this.singers.concat(res.artists)
          if (res.more) {
            this.loading = true
            this.loadStatus = true
            this.params.offset += 30
          } else {
            this.loading = false
          }
        }
      } catch (error) {
        this.$message.error(error)
      }
    },
    // 加载更多
    load() {
      if (this.loadStatus) {
        setTimeout(() => {
          this.getSingerList()
        }, 1000)
      }
    }
  },
  created() {},
  mounted() {
    this.getEn()
    this.getSingerList()
  }
}
</script>
<style lang="stylus" scoped>
.singer-wrap {
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
      width: 28px;
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
