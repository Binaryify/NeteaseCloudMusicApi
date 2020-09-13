import { RequestBaseConfig } from './base'

export interface SendPlaylistRequestConfig extends RequestBaseConfig {
  playlist: string | number
  msg: string
  user_ids: string
}
