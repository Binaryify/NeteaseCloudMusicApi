import { RequestBaseConfig } from './base'

export interface TopMvRequestConfig extends RequestBaseConfig {
  area?: string
  limit?: string | number
  offset?: string | number
}
