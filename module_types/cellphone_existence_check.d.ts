import { RequestBaseConfig } from './base'

export interface CaptchaExistenceCheckRequestConfig extends RequestBaseConfig {
  cellphone: string
  countrycode: string
}
