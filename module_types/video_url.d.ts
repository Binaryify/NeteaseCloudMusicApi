import { RequestBaseConfig } from './base'

export interface VideoUrlRequestConfig extends RequestBaseConfig {
  id: string | number
  res?: number
}
