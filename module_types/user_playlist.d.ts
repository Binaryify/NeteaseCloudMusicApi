import { RequestBaseConfig } from './base'

export interface UserPlaylistRequestConfig extends RequestBaseConfig {
  uid: number
  limit?: number
  offset?: number
}
