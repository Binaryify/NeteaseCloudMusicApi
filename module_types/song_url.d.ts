import { RequestBaseConfig } from './base'

export interface SongUrlRequestConfig extends RequestBaseConfig {
  id: string
  br?: number
}
