import { RequestBaseConfig } from './base'

export interface SearchMultimatchRequestConfig extends RequestBaseConfig {
  type?: number
  keywords: string
}
