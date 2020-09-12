import { RequestBaseConfig } from './base'

export interface ProgramRecommendRequestConfig extends RequestBaseConfig {
  type: string
  limit?: number
  offset?: number
}
