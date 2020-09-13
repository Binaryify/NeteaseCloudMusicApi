import { RequestBaseConfig } from './base'

export interface AlbumNewRequestConfig extends RequestBaseConfig {
  limit?: string | number // 默认 30
  offset?: string | number // 默认 0
  area?: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP' // 默认 ALL
}
