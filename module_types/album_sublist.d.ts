import { RequestBaseConfig } from './base'

export interface AlbumSubListRequestConfig extends RequestBaseConfig {
  limit: string | number // 默认： 25
  offset: string | number // 默认： 0
}
