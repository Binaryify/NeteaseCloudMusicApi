import { RequestBaseConfig } from './base'

export interface PlaylistUpdateRequestConfig extends RequestBaseConfig {
  id: string | number
  name: string
  desc?: string
  tags?: string
}
