import { RequestBaseConfig } from './base'

export interface DjRadioHotRequestConfig extends RequestBaseConfig {
  cateId: string | number
  limit?: string | number
  offset?: string | number
}
