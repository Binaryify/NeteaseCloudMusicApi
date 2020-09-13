import { RequestBaseConfig } from './base'

export interface MvSubRequestConfig extends RequestBaseConfig {
  t: 0 | 1
  mvid: string | number
}
