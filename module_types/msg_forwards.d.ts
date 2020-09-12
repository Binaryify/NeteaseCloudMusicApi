import { RequestBaseConfig } from './base'

export interface MsgForwardsRequestConfig extends RequestBaseConfig {
  offset?: number
  limit?: number
}
