import { RequestBaseConfig } from './base'

export interface MsgCommentsRequestConfig extends RequestBaseConfig {
  uid: string | number
  before?: string | number
  limit?: string | number
}
