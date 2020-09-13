import { RequestBaseConfig } from './base'

export interface PersonalizedRequestConfig extends RequestBaseConfig {
  limit?: string | number
}
