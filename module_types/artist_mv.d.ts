import { RequestBaseConfig } from './base'

export interface ArtistMVRequestConfig extends RequestBaseConfig {
  artistId: string | number
  limit: string | number
  offset: string | number
}
