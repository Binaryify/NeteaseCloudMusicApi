import { RequestBaseConfig } from './base'

export interface FmTrashRequestConfig extends RequestBaseConfig {
  id: string | number
  time?: string | number
}
