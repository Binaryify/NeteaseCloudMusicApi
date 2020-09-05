import { RequestBaseConfig } from './base'

export interface SongOrderUpdateRequestConfig extends RequestBaseConfig {
  pid: string
  ids: string
}
