import { RequestBaseConfig } from './base'

export interface UserUpdateRequestConfig extends RequestBaseConfig {
  birthday: string
  city: string
  gender: string
  nickname: string
  province: string
  signature: string
}
