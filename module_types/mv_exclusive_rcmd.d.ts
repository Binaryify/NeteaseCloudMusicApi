import { RequestBaseConfig } from './base'

export interface MvExclusiveRcmdRequestConfig extends RequestBaseConfig {
  offset?: number
  limit?: number
}
