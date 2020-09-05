import { RequestBaseConfig } from './base'

export interface MsgPrivateHistoryRequestConfig extends RequestBaseConfig {
  before?: number
  limit?: number
  uid: string
}
