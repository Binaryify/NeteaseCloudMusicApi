import { RequestBaseConfig } from './base'

export interface CommentRequestConfig extends RequestBaseConfig {
  id: string | number
  type: 0 | 1 | 2 | 3 | 4 | 5 | 6
  t: 1 | 2 | 0
  threadId?: string
  content?: string | number
  commentId?: string | number
}
