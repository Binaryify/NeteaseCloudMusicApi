import { RequestBaseConfig } from './base'

export interface PlaylistDescUpdateRequestConfig extends RequestBaseConfig {
  id: string | number
  desc: string
}
