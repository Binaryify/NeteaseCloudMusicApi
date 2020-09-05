import { RequestBaseConfig } from './base'

export interface PlaylistDescUpdateRequestConfig extends RequestBaseConfig {
  id: string
  desc: string
}
