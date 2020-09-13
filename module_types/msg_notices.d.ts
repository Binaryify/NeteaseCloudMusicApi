import { RequestBaseConfig } from './base'

export interface MsgNoticesRequestConfig extends RequestBaseConfig {
  limit?: string | number
  lasttime?: string | number
}
