import { RequestBaseConfig } from './base'

export interface ProgramRecommendRequestConfig extends RequestBaseConfig {
  type: string
  limit?: string | number
  offset?: string | number
}
