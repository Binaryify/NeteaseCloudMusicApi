import { RequestBaseConfig } from './base'

export interface AlbumNewRequestConfig extends RequestBaseConfig {
  limit?: number // 默认 30
  offset?: number // 默认 0
  area?: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP' // 默认 ALL
}
