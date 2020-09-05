import { RequestBaseConfig } from './base'

export interface EventForwardRequestConfig extends RequestBaseConfig {
  forwords: string
  evId: string
  uid: string
}
