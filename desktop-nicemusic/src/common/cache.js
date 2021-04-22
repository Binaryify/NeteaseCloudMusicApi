import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX = 15

const HISTORY_KEY = '__history__'
const HISTORY_MAX_LENGTH = 50

// 插入
function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index === 0) {
    return
  }
  if(index > 0) {
    arr.splice(index, 1)
  }
  arr.unshift(val)
  if(maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

// 删除
function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}

// 存储历史搜索数据
export function saveSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  insertArray(searches, query, item => {
    return item === query
  }, SEARCH_MAX)
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 读取历史搜索数据
export function getSearch() {
  return storage.get(SEARCH_KEY, [])
}

// 删除单个搜索历史
export function deleteSearch(query) {
  let searches = storage.get(SEARCH_KEY, [])
  deleteFromArray(searches, item => {
    return item === query
  })
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 清空搜索历史
export function clearSearch() {
  storage.remove(SEARCH_KEY)
  return []
}

// 添加最近播放列表
export function saveHistory(song) {
  let songs = storage.get(HISTORY_KEY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, HISTORY_MAX_LENGTH)
  storage.set(HISTORY_KEY, songs)
  return songs
}

// 移除最近播放列表
export function deleteHistory(song) {
  let songs = storage.get(HISTORY_KEY, [])
  deleteFromArray(songs, (item) => {
    return song.id === item.id
  })
  storage.set(HISTORY_KEY, songs)
  return songs
}

// 清空最近播放列表
export function clearHistory() {
  storage.remove(HISTORY_KEY)
  return []
}