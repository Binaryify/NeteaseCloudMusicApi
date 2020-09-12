import { RequestBaseConfig } from './base'

export interface ArtistMVRequestConfig extends RequestBaseConfig {
  artistId: string
  limit: number
  offset: number
}
