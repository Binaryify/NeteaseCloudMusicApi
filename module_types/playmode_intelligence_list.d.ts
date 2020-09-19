import { RequestBaseConfig } from './base'

export interface PlaymodeIntelligenceListRequestConfig
  extends RequestBaseConfig {
  id: string | number
  pid: string | number
  sid?: string | number
  count?: string | number
}
