import { RequestBaseConfig } from './base'

export interface LikeRequestConfig extends RequestBaseConfig {
  like?: 'true' | 'false' | boolean
  id: string | number
  alg?: string
  time?: string | number
}
