import { RequestBaseConfig } from './base'

export interface VideoCategoryListRequestConfig extends RequestBaseConfig {
  offset?: number
  limit?: number
}
