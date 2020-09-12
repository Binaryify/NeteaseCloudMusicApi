import { RequestBaseConfig } from './base'

export interface CommentEventRequestConfig extends RequestBaseConfig {
  threadId: string
  limit?: number
  offset?: number
  before?: number
}
