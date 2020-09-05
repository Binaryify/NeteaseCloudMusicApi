import { RequestBaseConfig } from './base'

export interface UserDjRequestConfig extends RequestBaseConfig {
  limit?: number
  offset?: number
  uid: string
}
