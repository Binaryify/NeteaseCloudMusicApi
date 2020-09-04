import { RequestBaseConfig } from './base'

export interface CommentHotRequestConfig extends RequestBaseConfig {
  id: string
  type: 0 | 1 | 2 | 3 | 4 | 5
  offset?: number
  limit?: number
  before?: number
}
