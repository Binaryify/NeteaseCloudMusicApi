import { RequestBaseConfig } from './base'

export interface VideoSubRequestConfig extends RequestBaseConfig {
  t?: 1 | 0
  id: string
}
