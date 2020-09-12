import { RequestBaseConfig } from './base'

export interface AlbumSubRequestConfig extends RequestBaseConfig {
  id: string
  t: 1 | 0
}
