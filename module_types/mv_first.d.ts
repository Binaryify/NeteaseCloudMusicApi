import { RequestBaseConfig } from './base'

export interface MvFirstRequestConfig extends RequestBaseConfig {
  area?: string
  limit?: string | number
}
