import { RequestBaseConfig } from './base'

export interface HotTopicRequestConfig extends RequestBaseConfig {
  limit?: number
  offset?: number
}
