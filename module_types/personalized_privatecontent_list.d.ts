import { RequestBaseConfig } from './base'

export interface PersonalizedPrivatecontentListRequestConfig
  extends RequestBaseConfig {
  offset?: string | number
  limit?: string | number
}
