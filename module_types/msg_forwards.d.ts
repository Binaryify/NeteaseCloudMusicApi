import { RequestBaseConfig } from './base'

export interface MsgForwardsRequestConfig extends RequestBaseConfig {
  offset?: string | number
  limit?: string | number
}
