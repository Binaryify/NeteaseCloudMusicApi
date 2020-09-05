import { RequestBaseConfig } from './base'

export interface DjSublistRequestConfig extends RequestBaseConfig {
  limit?: number
  offset?: number
}
