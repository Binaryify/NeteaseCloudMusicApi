import { RequestBaseConfig } from './base'

export interface DjToplistRequestConfig extends RequestBaseConfig {
  type: 'new' | 'hot'
  limit?: number
  offset?: number
}
