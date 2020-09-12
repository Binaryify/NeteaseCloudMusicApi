export interface APIBaseResponse {
  code: number
  cookie: string
  [index: string]: unknown
}

export interface RequestBaseConfig {
  cookie?: string
  realIP?: string // IPv4/IPv6 filled in X-Real-IP
  proxy?: string // HTTP proxy
}
