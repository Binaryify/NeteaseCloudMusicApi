import { RequestBaseConfig } from './base'

export interface EventRequestConfig extends RequestBaseConfig {
  pagesize?: number
  lasttime?: number
}
