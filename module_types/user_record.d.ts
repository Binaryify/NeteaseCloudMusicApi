import { RequestBaseConfig } from './base'

export interface UserRecordRequestConfig extends RequestBaseConfig {
  uid: string | number
  type?: 1 | 0
}
