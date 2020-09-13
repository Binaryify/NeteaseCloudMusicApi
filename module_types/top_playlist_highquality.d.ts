import { RequestBaseConfig } from './base'

export interface TopPlaylistHighqualityRequestConfig extends RequestBaseConfig {
  cat?: string
  before?: string | number
  limit?: string | number
}
