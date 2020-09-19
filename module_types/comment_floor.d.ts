import { RequestBaseConfig } from './base'

export interface CommentFloorRequestConfig extends RequestBaseConfig {
  id: string | number
  parentCommentId: string | number
  type: 0 | 1 | 2 | 3 | 4 | 5
  limit?: string | number
  time?: string | number
}
