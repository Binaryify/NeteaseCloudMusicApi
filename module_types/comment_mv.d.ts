import { RequestBaseConfig } from './base'

export interface CommentMvRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: number
  before?: number
}
