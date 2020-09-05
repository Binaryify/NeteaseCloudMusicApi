import { RequestBaseConfig } from './base'

export interface SendPlaylistRequestConfig extends RequestBaseConfig {
  playlist: string
  msg: string
  user_ids: string
}
