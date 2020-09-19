import { RequestBaseConfig } from './base'

export interface AlbumSongSaleBoardRequestConfig extends RequestBaseConfig {
  albumType?: 0 | 1 // 0 为数字专辑,1 为数字单曲
  type?: 'daily' | 'week' | 'year' | 'total'
  year?: string | number // 年份，默认本年。 type 为 year 时有效
}
