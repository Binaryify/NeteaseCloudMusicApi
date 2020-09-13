import { RequestBaseConfig } from './base'

export interface SimiUserRequestConfig extends RequestBaseConfig {
  id: string | number
  limit?: string | number
  offset?: string | number
}
