import { RequestBaseConfig } from './base'

export interface MvSublistRequestConfig extends RequestBaseConfig {
  limit?: number
  offset?: number
}
