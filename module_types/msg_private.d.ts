import { RequestBaseConfig } from './base'

export interface MsgPrivateRequestConfig extends RequestBaseConfig {
  offset?: string | number
  limit?: string | number
}
