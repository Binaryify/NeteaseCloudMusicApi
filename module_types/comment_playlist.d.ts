import { RequestBaseConfig } from './base'

export interface CommentPlaylistRequestConfig extends RequestBaseConfig {
  id: string | number
  limit?: string | number
  offset?: string | number
  before?: string | number
}
