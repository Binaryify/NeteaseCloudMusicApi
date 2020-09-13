import { RequestBaseConfig } from './base'

export interface HotTopicRequestConfig extends RequestBaseConfig {
  limit?: string | number
  offset?: string | number
}
