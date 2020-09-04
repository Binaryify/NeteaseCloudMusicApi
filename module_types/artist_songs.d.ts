import { RequestBaseConfig } from './base'

export interface ArtistSongsRequestConfig extends RequestBaseConfig {
  id: string
  order?: 'hot' | 'time'
  offset?: number
  limit?: number
}
