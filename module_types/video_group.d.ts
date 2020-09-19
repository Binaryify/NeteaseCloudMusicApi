import { RequestBaseConfig } from './base'

export interface VideoGroupRequestConfig extends RequestBaseConfig {
  id: string
  offset?: string | number
}
