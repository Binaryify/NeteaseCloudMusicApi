import { RequestBaseConfig } from './base'

export interface CommentEventRequestConfig extends RequestBaseConfig {
  threadId: string
  limit?: string | number
  offset?: string | number
  before?: string | number
}
