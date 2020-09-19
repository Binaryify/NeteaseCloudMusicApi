import { RequestBaseConfig } from './base'

export interface DjToplistNewcomerRequestConfig extends RequestBaseConfig {
  limit?: string | number
  offset?: string | number
}
