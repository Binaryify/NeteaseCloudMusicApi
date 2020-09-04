import { RequestBaseConfig } from './base'

export interface CommentMusicRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: number
  before?: number
}
