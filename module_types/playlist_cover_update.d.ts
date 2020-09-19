import { RequestBaseConfig } from './base'

export interface PlaylistCoverUpdateRequestConfig extends RequestBaseConfig {
  id: string
  imgFile: {
    name: string
    data: string | Buffer
  }
  imgSize?: number
  imgX?: number
  imgY?: number
}
