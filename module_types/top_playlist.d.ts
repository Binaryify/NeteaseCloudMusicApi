import { RequestBaseConfig } from './base'

export interface TopPlaylistRequestConfig extends RequestBaseConfig {
  cat?: string
  order?: 'hot' | 'new'
  limit?: number
  offset?: number
}
