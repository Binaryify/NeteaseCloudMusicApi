import { RequestBaseConfig } from './base'

export interface MvSublistRequestConfig extends RequestBaseConfig {
  limit?: string | number
  offset?: string | number
}
