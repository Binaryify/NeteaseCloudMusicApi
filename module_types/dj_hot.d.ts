import { RequestBaseConfig } from './base'

export interface DjHotRequestConfig extends RequestBaseConfig {
  offset?: string | number
  limit?: string | number
}
