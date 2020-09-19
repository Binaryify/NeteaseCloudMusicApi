import { RequestBaseConfig } from './base'

export interface PlaylistTagsUpdateRequestConfig extends RequestBaseConfig {
  id: string | number
  tags: string
}
