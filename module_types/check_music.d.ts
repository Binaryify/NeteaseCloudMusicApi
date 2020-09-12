import { RequestBaseConfig } from './base'

export interface CheckMusicRequestConfig extends RequestBaseConfig {
  id: string | number
  br: string | number
}
