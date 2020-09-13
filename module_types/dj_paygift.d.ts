import { RequestBaseConfig } from './base'

export interface DjPaygiftRequestConfig extends RequestBaseConfig {
  offset?: string | number
  limit?: string | number
}
