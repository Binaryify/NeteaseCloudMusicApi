import { RequestBaseConfig } from './base'

export interface UserFollowsRequestConfig extends RequestBaseConfig {
  uid: string | number
  offset?: string | number
  limit?: string | number
}
