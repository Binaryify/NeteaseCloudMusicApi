import { RequestBaseConfig } from './base'

export interface ArtistSongRequestConfig extends RequestBaseConfig {
  id: string
  order?: 'hot' | 'time'
  offset?: number
  limit?: number
}
