import { RequestBaseConfig } from './base'

export interface ArtistSubRequestConfig extends RequestBaseConfig {
  id: string | number
  t: 1 | 0
}
