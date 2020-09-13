import { RequestBaseConfig } from './base'

export interface SimiSongRequestConfig extends RequestBaseConfig {
  id: string | number
  limit?: string | number
  offset?: string | number
}
