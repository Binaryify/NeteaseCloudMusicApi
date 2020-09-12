import { RequestBaseConfig } from './base'

export interface TopAlbumRequestConfig extends RequestBaseConfig {
  area?: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP'
  limit?: number
  offset?: number
  type?: string
  year?: string
  mouth?: string
}
