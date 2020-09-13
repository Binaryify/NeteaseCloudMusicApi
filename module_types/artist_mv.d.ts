import { RequestBaseConfig } from './base'

export interface ArtistMVRequestConfig extends RequestBaseConfig {
  id: string | number
  limit: string | number
  offset: string | number
}
