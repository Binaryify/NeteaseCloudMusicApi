import { RequestBaseConfig } from './base'
export interface AvatarUploadRequestConfig extends RequestBaseConfig {
  imgFile: {
    name: string
    data: string | Buffer
  }
  imgSize?: number
  imgX?: number
  imgY?: number
}
