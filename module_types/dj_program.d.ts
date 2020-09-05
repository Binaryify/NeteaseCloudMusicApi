import { RequestBaseConfig } from './base'

export interface DjProgramRequestConfig extends RequestBaseConfig {
  rid: string
  limit?: number
  offset?: number
  asc: 'true' | 1 | 'false' | 0
}
