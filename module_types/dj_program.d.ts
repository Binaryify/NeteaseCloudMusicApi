import { RequestBaseConfig } from './base'

export interface DjProgramRequestConfig extends RequestBaseConfig {
  rid: string | number
  limit?: string | number
  offset?: string | number
  asc: 'true' | 1 | 'false' | 0
}
