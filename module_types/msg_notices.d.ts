import { RequestBaseConfig } from './base'

export interface MsgNoticesRequestConfig extends RequestBaseConfig {
  limit?: number
  lasttime?: number
}
