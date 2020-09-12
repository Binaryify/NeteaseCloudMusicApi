import { RequestBaseConfig } from './base'

export interface PlaymodeIntelligenceListRequestConfig
  extends RequestBaseConfig {
  id: string
  pid: string
  sid?: string
  count?: number
}
