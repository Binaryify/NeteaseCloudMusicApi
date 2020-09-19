import { RequestBaseConfig } from './base'

export interface CommentHotRequestConfig extends RequestBaseConfig {
  id: string | number
  type: 0 | 1 | 2 | 3 | 4 | 5
  offset?: string | number
  limit?: string | number
  before?: string | number
}
