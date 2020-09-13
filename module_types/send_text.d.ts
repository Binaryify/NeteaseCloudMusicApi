import { RequestBaseConfig } from './base'

export interface SendTextRequestConfig extends RequestBaseConfig {
  msg: string
  id: string | number
  user_ids: string
}
