import { RequestBaseConfig } from './base'

export interface ResourceLikeRequestConfig extends RequestBaseConfig {
  t: 0 | 1
  type: 1 | 4 | 5 | 6
  id?: string | number
  threadId?: string
}
