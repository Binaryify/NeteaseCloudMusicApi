import { RequestBaseConfig } from './base'

export interface PlaylistSubscribersRequestConfig extends RequestBaseConfig {
  id?: string | number
  limit?: string | number
  offset?: string | number
}
