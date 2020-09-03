import { RequestBaseConfig } from './base'

export interface AlbumSubRequestConfig extends RequestBaseConfig {
  id: string
  t: 'sub' | 'unsub'
}
