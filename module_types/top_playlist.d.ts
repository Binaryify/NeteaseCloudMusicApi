import { RequestBaseConfig } from './base'

export interface TopPlaylistRequestConfig extends RequestBaseConfig {
  cat?: string
  order?: 'hot' | 'new'
  limit?: string | number
  offset?: string | number
}
