import { RequestBaseConfig } from './base'

export interface WeblogRequestConfig extends RequestBaseConfig {
  data?: { [index: string]: unknown }
}
