import { RequestBaseConfig } from './base'

export interface TopMvRequestConfig extends RequestBaseConfig {
  area?: string
  limit?: number
  offset?: number
}
