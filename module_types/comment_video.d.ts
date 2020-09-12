import { RequestBaseConfig } from './base'

export interface CommentVideoRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: number
  before?: number
}
