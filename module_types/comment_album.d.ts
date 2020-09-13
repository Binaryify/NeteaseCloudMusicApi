import { RequestBaseConfig } from './base'

export interface CommentAlbumRequestConfig extends RequestBaseConfig {
  id: string | number
  limit?: string | number
  offset?: string | number
  before?: string | number
}
