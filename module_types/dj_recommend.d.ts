import { RequestBaseConfig } from './base'

export interface DjRecommendRequestConfig extends RequestBaseConfig {
  rid: string
  limit?: number
  offset?: number
  asc: 0 | 1 | 'true' | 'false'
}
