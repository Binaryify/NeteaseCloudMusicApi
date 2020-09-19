import { RequestBaseConfig } from './base'

export interface PlaylistTracksRequestConfig extends RequestBaseConfig {
  op: 'add' | 'del'
  pid: string | number
  tracks: string
}
