import { RequestBaseConfig } from './base'

export interface PlaylistTagsUpdateRequestConfig extends RequestBaseConfig {
  id: string
  tags: string
}
