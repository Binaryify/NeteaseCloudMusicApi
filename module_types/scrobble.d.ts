import { RequestBaseConfig } from './base'

export interface ScrobbleRequestConfig extends RequestBaseConfig {
  id: string
  sourceid: string
  time: string
}
