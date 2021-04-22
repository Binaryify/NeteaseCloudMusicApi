// 登录状态
export const loginStatu = state => {
  return (
    state.loginStatu || JSON.parse(window.localStorage.getItem('loginStatu'))
  )
}

// 用户信息
export const userInfo = state => {
  return state.userInfo || JSON.parse(window.localStorage.getItem('userInfo'))
}

// 歌手信息
export const singer = state => state.singer

// 播放状态
export const playing = state => state.playing

// 播放列表
export const playList = state => state.playList

// 顺序列表
export const sequenceList = state => state.sequenceList

// 当前播放模式(循环，单曲，随机)
export const mode = state => state.mode

// 当前播放索引
export const currentIndex = state => state.currentIndex

// 当前播放歌曲
export const currentSong = state => {
  return state.playList[state.currentIndex] || {}
}

// 搜索历史
export const searchHistory = state => {
  return state.searchHistory
}

// 收藏列表
export const historyList = (state) => {
  // return state.historyList.map(song => {
  //   return new song(song)
  // })
  return state.historyList
}