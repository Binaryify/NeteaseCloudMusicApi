import { RequestBaseConfig } from './base'

export interface TopArtistsRequestConfig extends RequestBaseConfig {
  limit?: string
  offset?: string
}
