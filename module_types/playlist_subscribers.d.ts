import { RequestBaseConfig } from './base'

export interface PlaylistSubscribersRequestConfig extends RequestBaseConfig {
  id?: string
  limit?: number
  offset?: number
}
