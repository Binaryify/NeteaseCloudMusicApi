import { RequestBaseConfig } from './base'

export interface AlbumSubListRequestConfig extends RequestBaseConfig {
  limit: number // 默认： 25
  offset: number // 默认： 0
}
