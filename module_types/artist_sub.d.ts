import { RequestBaseConfig } from './base'

export interface ArtistSubRequestConfig extends RequestBaseConfig {
  artistId: string
  t: 'sub' | 'unsub'
}
