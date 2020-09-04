import { RequestBaseConfig } from './base'

export interface DjHotRequestConfig extends RequestBaseConfig {
  offset?: number
  limit?: number
}
