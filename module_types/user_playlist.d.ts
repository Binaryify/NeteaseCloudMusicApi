import { RequestBaseConfig } from './base'

export interface UserPlaylistRequestConfig extends RequestBaseConfig {
  uid: string | number
  limit?: string | number
  offset?: string | number
}
