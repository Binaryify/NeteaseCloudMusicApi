import { RequestBaseConfig } from './base'

export interface MsgPrivateRequestConfig extends RequestBaseConfig {
  offset?: number
  limit?: number
}
