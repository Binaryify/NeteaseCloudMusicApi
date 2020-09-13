import { RequestBaseConfig } from './base'

export interface ArtistSubRequestConfig extends RequestBaseConfig {
  artistId: string | number
  t: 1 | 0
}
