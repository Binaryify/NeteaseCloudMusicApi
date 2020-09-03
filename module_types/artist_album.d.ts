import { RequestBaseConfig } from './base'

export interface ArtistAlbumRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number // 默认 30
  offset?: number // 默认 0
}
