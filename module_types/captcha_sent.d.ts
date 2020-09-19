import { RequestBaseConfig } from './base'

export interface CaptchaSentRequestConfig extends RequestBaseConfig {
  cellphone: string
  ctcode?: string
}
