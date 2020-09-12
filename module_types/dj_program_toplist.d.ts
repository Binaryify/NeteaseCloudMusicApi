import { RequestBaseConfig } from './base'

export interface DjProgramToplistRequestConfig extends RequestBaseConfig {
  limit?: number
  offset?: number
}
