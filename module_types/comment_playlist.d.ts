import { RequestBaseConfig } from './base'

export interface CommentPlaylistRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: number
  before?: number
}
