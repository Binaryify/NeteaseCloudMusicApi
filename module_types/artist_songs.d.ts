import { RequestBaseConfig } from './base'

export interface ArtistSongsRequestConfig extends RequestBaseConfig {
  id: string | number
  order?: 'hot' | 'time'
  offset?: string | number
  limit?: string | number
}
