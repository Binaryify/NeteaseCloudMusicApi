import { RequestBaseConfig } from './base'

export interface MvExclusiveRcmdRequestConfig extends RequestBaseConfig {
  offset?: string | number
  limit?: string | number
}
