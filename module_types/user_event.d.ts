import { RequestBaseConfig } from './base'

export interface UserEventRequestConfig extends RequestBaseConfig {
  lasttime?: number
  limit?: number
  uid: string
}
