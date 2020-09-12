import { RequestBaseConfig } from './base'

export interface PlaylistDetailRequestConfig extends RequestBaseConfig {
  id: string
  s?: number
}
