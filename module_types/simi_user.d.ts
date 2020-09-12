import { RequestBaseConfig } from './base'

export interface SimiUserRequestConfig extends RequestBaseConfig {
  id: string
  limit?: number
  offset?: number
}
