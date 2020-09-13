import { RequestBaseConfig } from './base'

export interface ShareResourceRequestConfig extends RequestBaseConfig {
  type?: 'song' | 'playlist' | 'mv' | 'djprogram' | 'djradio'
  msg?: string
  id?: string | number
}
