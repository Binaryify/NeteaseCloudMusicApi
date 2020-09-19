import { RequestBaseConfig } from './base'

export interface ArtistSubListRequestConfig extends RequestBaseConfig {
  limit?: string | number
  offset?: string | number
}
