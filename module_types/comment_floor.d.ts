import { RequestBaseConfig } from './base'

export interface CommentFloorRequestConfig extends RequestBaseConfig {
  id: string
  parentCommentId: string
  type: 0 | 1 | 2 | 3 | 4 | 5
  limit?: number
  time?: number
}
