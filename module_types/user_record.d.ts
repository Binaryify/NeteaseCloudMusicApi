import { RequestBaseConfig } from './base'

export interface UserRecordRequestConfig extends RequestBaseConfig {
  uid: string
  type: 1 | 0
}
