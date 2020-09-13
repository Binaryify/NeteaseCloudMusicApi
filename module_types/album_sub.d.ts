import { RequestBaseConfig } from './base'

export interface AlbumSubRequestConfig extends RequestBaseConfig {
  id: string | number
  t: 1 | 0
}
