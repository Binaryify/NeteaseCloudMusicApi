import { RequestBaseConfig } from './base'

export interface SearchSuggestRequestConfig extends RequestBaseConfig {
  keywords: string
  type?: 'mobile' | 'web'
}
