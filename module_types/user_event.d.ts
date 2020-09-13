import { RequestBaseConfig } from './base'

export interface UserEventRequestConfig extends RequestBaseConfig {
  lasttime?: string | number
  limit?: string | number
  uid: string | number
}
