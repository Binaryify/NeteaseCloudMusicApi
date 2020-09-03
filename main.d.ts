export interface Response<T> {
  status: number // The Http Response Code
  body: T // API Response body
  cookie: string[]
}
