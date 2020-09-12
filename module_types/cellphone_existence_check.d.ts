import { RequestBaseConfig } from './base'

export interface CellphoneExistenceCheckRequestConfig
  extends RequestBaseConfig {
  cellphone: string
  countrycode: string
}
