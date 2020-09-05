import { RequestBaseConfig } from './base'

export interface SimiPlaylistRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: string
}
