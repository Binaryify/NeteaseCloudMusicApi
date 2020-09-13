import { RequestBaseConfig } from './base'

export interface UserFollowedsRequestConfig extends RequestBaseConfig {
  uid: string | number
  lasttime?: string | number
  limit?: string | number
}
