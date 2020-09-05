import { RequestBaseConfig } from './base'

export interface TopPlaylistHighqualityRequestConfig extends RequestBaseConfig {
  cat?: string
  before?: number
  limit?: number
}
