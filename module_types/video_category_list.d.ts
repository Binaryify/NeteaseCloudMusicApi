import { RequestBaseConfig } from './base'

export interface VideoCategoryListRequestConfig extends RequestBaseConfig {
  offset?: string | number
  limit?: string | number
}
