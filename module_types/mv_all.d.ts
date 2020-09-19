import { RequestBaseConfig } from './base'

export interface MvAllRequestConfig extends RequestBaseConfig {
  area?: string
  type?: string
  order?: string
  offset?: string | number
  limit?: string | number
}
