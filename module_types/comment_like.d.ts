import { RequestBaseConfig } from './base'

export interface CommentLikeRequestConfig extends RequestBaseConfig {
  id: string | number
  type: 0 | 1 | 2 | 3 | 4 | 5
  t: 1 | 0
  cid: string | number
  threadId?: string
}
