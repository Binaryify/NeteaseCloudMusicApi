import { RequestBaseConfig } from './base'

export interface UserFollowsRequestConfig extends RequestBaseConfig {
  uid: string
  offset?: number
  limit?: number
}
