import { RequestBaseConfig } from './base'

export interface SendTextRequestConfig extends RequestBaseConfig {
  msg: string
  user_ids: string
}
