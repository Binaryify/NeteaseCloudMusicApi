import { RequestBaseConfig } from './base'

export interface DigitalAlbumPurchasedRequestConfig extends RequestBaseConfig {
  offset?: string | number
  limit?: string | number
}
