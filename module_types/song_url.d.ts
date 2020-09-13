import { RequestBaseConfig } from './base'

export interface SongUrlRequestConfig extends RequestBaseConfig {
  id: string | number
  br?: string | number
}
