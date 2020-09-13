import { RequestBaseConfig } from './base'

export interface DjToplistRequestConfig extends RequestBaseConfig {
  type?: 'new' | 'hot'
  limit?: string | number
  offset?: string | number
}
