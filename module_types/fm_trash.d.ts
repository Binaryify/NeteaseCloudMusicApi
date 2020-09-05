import { RequestBaseConfig } from './base'

export interface FmTrashRequestConfig extends RequestBaseConfig {
  id: string
  time?: number
}
