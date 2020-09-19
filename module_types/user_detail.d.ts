import { RequestBaseConfig } from './base'

export interface UserDetailRequestConfig extends RequestBaseConfig {
  uid: string | number
}
