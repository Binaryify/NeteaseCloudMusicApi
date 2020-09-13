import { RequestBaseConfig } from './base'

export interface DigitalAlbumOrderingRequestConfig extends RequestBaseConfig {
  payment: string
  id: string | number
  quantity: string
}
