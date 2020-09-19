import { RequestBaseConfig } from './base'

export interface SongOrderUpdateRequestConfig extends RequestBaseConfig {
  pid: string | number
  ids: string
}
