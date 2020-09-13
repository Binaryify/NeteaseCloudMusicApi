import { RequestBaseConfig } from './base'

export interface UserDjRequestConfig extends RequestBaseConfig {
  limit?: string | number
  offset?: string | number
  uid: string | number
}
