import { RequestBaseConfig } from './base'

export interface SearchRequestConfig extends RequestBaseConfig {
  keywords: string
  type?: 1 | 10 | 100 | 1000 | 1002 | 1004 | 1006 | 1009 | 1014
  limit?: string | number
  offset?: string | number
}
