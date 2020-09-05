import { RequestBaseConfig } from './base'

export interface RebindRequestConfig extends RequestBaseConfig {
  captcha: string
  phone: string
  oldcaptcha: string
  ctcode?: string
}
