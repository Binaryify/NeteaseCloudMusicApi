import { RequestBaseConfig } from './base'

export interface PlaylistUpdateRequestConfig extends RequestBaseConfig {
  id: string
  name: string
  desc?: string
  tags?: string
}
