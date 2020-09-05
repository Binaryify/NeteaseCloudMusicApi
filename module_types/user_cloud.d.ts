import { RequestBaseConfig } from './base'

export interface UserCloudRequestConfig extends RequestBaseConfig {
  limit?: number
  offset?: number
}
