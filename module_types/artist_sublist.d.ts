import { RequestBaseConfig } from './base'

export interface ArtistSubListRequestConfig extends RequestBaseConfig {
  limit?: number
  offset?: number
}
