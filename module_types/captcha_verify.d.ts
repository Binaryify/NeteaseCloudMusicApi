import { RequestBaseConfig } from './base'

export interface CaptchaVerifyRequestConfig extends RequestBaseConfig {
  ctcode?: string
  cellphone: string
  captcha: string
}
