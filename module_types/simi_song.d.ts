import { RequestBaseConfig } from './base'

export interface SimiSongRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: number
}
