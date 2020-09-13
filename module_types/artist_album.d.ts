import { RequestBaseConfig } from './base'

export interface ArtistAlbumRequestConfig extends RequestBaseConfig {
  id: string | number
  limit?: string | number // 默认 30
  offset?: string | number // 默认 0
}
