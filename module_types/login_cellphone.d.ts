import { RequestBaseConfig } from './base'

export interface LoginCellphoneRequestConfig extends RequestBaseConfig {
  phone: string
  countrycode: string
  password?: string
  md5_password?: string
}
