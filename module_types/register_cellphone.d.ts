import { RequestBaseConfig } from './base'

export interface RegisterCellphoneRequestConfig extends RequestBaseConfig {
  captcha: string
  phone: string
  password: string
  nickname: string
}
