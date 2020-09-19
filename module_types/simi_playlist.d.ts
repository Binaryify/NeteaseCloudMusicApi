import { RequestBaseConfig } from './base'

export interface SimiPlaylistRequestConfig extends RequestBaseConfig {
  id: string | number
  limit?: string | number
  offset?: string | number
}
