import { RequestBaseConfig } from './base'

export interface LoginRequestConfig extends RequestBaseConfig {
  email: string
  password?: string
  md5_password?: string
}
