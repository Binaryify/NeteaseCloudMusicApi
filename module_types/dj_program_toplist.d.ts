import { RequestBaseConfig } from './base'

export interface DjProgramToplistRequestConfig extends RequestBaseConfig {
  limit?: string | number
  offset?: string | number
}
