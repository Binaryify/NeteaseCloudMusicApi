import { RequestBaseConfig } from './base'

export interface DjSublistRequestConfig extends RequestBaseConfig {
  limit?: string | number
  offset?: string | number
}
