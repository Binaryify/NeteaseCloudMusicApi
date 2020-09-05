import { RequestBaseConfig } from './base'

export interface SendTextRequestConfig extends RequestBaseConfig {
  msg: string
  id: string
  user_ids: string
}
