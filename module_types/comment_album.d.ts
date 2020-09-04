import { RequestBaseConfig } from './base'

export interface CommentAlbumRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: number
  before?: number
}
