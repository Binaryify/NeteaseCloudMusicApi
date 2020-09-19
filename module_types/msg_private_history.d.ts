import { RequestBaseConfig } from './base'

export interface MsgPrivateHistoryRequestConfig extends RequestBaseConfig {
  before?: string | number
  limit?: string | number
  uid: string | number
}
