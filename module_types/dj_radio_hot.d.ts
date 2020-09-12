import { RequestBaseConfig } from './base'

export interface DjRadioHotRequestConfig extends RequestBaseConfig {
  cateId: string
  limit?: number
  offset?: number
}
