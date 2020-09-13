import { RequestBaseConfig } from './base'

export interface HomepageBlockPageRequestConfig extends RequestBaseConfig {
  refresh?: 'true' | 'false' | boolean
}
