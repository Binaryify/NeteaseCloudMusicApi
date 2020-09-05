import { RequestBaseConfig } from './base'

export interface CommentLikeRequestConfig extends RequestBaseConfig {
  id: string
  type: 0 | 1 | 2 | 3 | 4 | 5
  t: 1 | 0
  cid: number
  threadId?: string
}
