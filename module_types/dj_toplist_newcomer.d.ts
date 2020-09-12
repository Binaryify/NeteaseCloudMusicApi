import { RequestBaseConfig } from './base'

export interface DjToplistNewcomerRequestConfig extends RequestBaseConfig {
  limit?: number
  offset?: number
}
