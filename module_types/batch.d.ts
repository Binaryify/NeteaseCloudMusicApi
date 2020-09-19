import { RequestBaseConfig } from './base'

export interface BatchRequestConfig extends RequestBaseConfig {
  [index: string]: unknown
}
