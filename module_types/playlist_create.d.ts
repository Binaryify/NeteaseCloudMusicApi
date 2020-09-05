import { RequestBaseConfig } from './base'

export interface PlaylistCreateRequestConfig extends RequestBaseConfig {
  name: string
  privacy: 0 | 10
}
