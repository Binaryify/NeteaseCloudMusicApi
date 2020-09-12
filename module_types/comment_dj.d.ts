import { RequestBaseConfig } from './base'

export interface CommentDjRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: number
  before?: number
}
