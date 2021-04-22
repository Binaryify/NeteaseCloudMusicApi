/* Layout */
import Layout from '@/views/layout/Index'

/**
 * 404
 */
export const pageError = {
  path: '*',
  name: '404',
  meta: {
    title: '404-您访问的页面不存在'
  },
  component: resolve => {
    require(['@/views/error/404'], resolve)
  }
}

/**
 * 登录注册
 */
export const loginRouter = [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录',
      isLogin: true
    },
    component: resolve => {
      require(['@/views/login/Index'], resolve)
    }
  }
]

/**
 * 主路由
 */
export const appRouter = [
  {
    path: '/',
    redirect: {
      name: 'home'
    },
    meta: {
      title: '首页',
      keepAlive: true
    },
    component: Layout,
    children: [
      {
        path: 'home',
        meta: {
          title: '首页',
          keepAlive: true
        },
        name: 'home',
        component: resolve => {
          require(['@/views/home/Index'], resolve)
        }
      },
      {
        path: 'singer',
        meta: {
          title: '歌手',
          keepAlive: true
        },
        name: 'singer',
        component: resolve => {
          require(['@/views/singer/Index.vue'], resolve)
        }
      },
      {
        path: 'singer-detail',
        meta: {
          title: '详情',
          keepAlive: true
        },
        name: 'singerDetail',
        component: resolve => {
          require(['@/views/singer/detail/Index.vue'], resolve)
        }
      },
      {
        path: 'rank',
        meta: {
          title: '排行榜',
          keepAlive: true
        },
        name: 'rank',
        component: resolve => {
          require(['@/views/rank/Index.vue'], resolve)
        }
      },
      {
        path: 'playlist',
        meta: {
          title: '歌单',
          keepAlive: true
        },
        name: 'playlist',
        component: resolve => {
          require(['@/views/playlist/Index.vue'], resolve)
        }
      },
      {
        path: 'playlist-detail',
        meta: {
          title: '详情',
          keepAlive: true
        },
        name: 'playlistDetail',
        component: resolve => {
          require(['@/views/playlist/detail/Index.vue'], resolve)
        }
      },
      {
        path: 'album-detail',
        meta: {
          title: '详情',
          keepAlive: true
        },
        name: 'albumDetail',
        component: resolve => {
          require(['@/views/album/Index.vue'], resolve)
        }
      },
      {
        path: 'video',
        meta: {
          title: '视频',
          keepAlive: true
        },
        name: 'video',
        component: resolve => {
          require(['@/views/video/Index.vue'], resolve)
        }
      },
      {
        path: 'video-detail',
        meta: {
          title: '详情',
          keepAlive: true
        },
        name: 'videoDetail',
        component: resolve => {
          require(['@/views/video/detail/Index.vue'], resolve)
        }
      },
      {
        path: 'mv',
        meta: {
          title: 'mv',
          keepAlive: true
        },
        name: 'mv',
        component: resolve => {
          require(['@/views/mv/Index.vue'], resolve)
        }
      },
      {
        path: 'mv-detail',
        meta: {
          title: '详情',
          keepAlive: true
        },
        name: 'mvDetail',
        component: resolve => {
          require(['@/views/mv/detail/Index.vue'], resolve)
        }
      },
      {
        path: 'personal',
        meta: {
          title: '个人中心',
          keepAlive: true
        },
        name: 'personal',
        component: resolve => {
          require(['@/views/personal/Index.vue'], resolve)
        }
      },
      {
        path: 'search',
        meta: {
          title: '搜索',
          keepAlive: true
        },
        name: 'search',
        component: resolve => {
          require(['@/views/search/Index.vue'], resolve)
        }
      }
    ]
  }
]

export const routes = [pageError, ...loginRouter, ...appRouter]
