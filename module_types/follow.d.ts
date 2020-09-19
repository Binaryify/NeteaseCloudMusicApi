import { RequestBaseConfig } from './base'

export interface FollowRequestConfig extends RequestBaseConfig {
  t: 0 | 1
  id: string | number
}
