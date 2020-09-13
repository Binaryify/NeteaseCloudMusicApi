import { RequestBaseConfig } from './base'

export interface EventForwardRequestConfig extends RequestBaseConfig {
  forwords: string
  evId: string | number
  uid: string | number
}
