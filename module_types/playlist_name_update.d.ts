import { RequestBaseConfig } from './base'

export interface PlaylistNameUpdateRequestConfig extends RequestBaseConfig {
  id: string | number
  name: string
}
