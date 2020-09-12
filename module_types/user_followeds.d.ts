import { RequestBaseConfig } from './base'

export interface UserFollowedsRequestConfig extends RequestBaseConfig {
  uid: string
  lasttime?: number
  limit?: number
}
