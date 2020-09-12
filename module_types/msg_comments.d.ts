import { RequestBaseConfig } from './base'

export interface MsgCommentsRequestConfig extends RequestBaseConfig {
  uid: string
  before?: string
  limit?: number
}
