import { RequestBaseConfig } from './base'

export interface DjSubRequestConfig extends RequestBaseConfig {
  t: 1 | 0
  rid: string | number
}
