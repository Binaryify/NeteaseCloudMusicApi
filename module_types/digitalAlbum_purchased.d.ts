import { RequestBaseConfig } from './base'

export interface DigitalAlbumPurchasedRequestConfig extends RequestBaseConfig {
  offset?: number
  limit?: number
}
