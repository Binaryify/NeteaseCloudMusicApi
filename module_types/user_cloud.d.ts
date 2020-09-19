import { RequestBaseConfig } from './base'

export interface UserCloudRequestConfig extends RequestBaseConfig {
  limit?: string | number
  offset?: string | number
}
