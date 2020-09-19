import { RequestBaseConfig } from './base'

export interface ScrobbleRequestConfig extends RequestBaseConfig {
  id: string | number
  sourceid: string | number
  time: string | number
}
