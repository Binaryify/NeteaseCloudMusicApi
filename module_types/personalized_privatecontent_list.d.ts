import { RequestBaseConfig } from './base'

export interface PersonalizedPrivatecontentListRequestConfig
  extends RequestBaseConfig {
  offset?: number
  limit?: number
}
