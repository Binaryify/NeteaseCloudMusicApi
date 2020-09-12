import { RequestBaseConfig } from './base'

export interface LikeRequestConfig extends RequestBaseConfig {
  like?: 'true' | 'false'
  id: string
  alg?: string
  time?: number
}
