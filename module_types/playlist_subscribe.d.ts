import { RequestBaseConfig } from './base'

export interface PlaylistSubscribeRequestConfig extends RequestBaseConfig {
  t: 0 | 1
  id: string | number
}
