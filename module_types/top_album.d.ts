import { RequestBaseConfig } from './base'

export interface TopAlbumRequestConfig extends RequestBaseConfig {
  area?: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP'
  limit?: string | number
  offset?: string | number
  type?: string
  year?: string
  mouth?: string
}
