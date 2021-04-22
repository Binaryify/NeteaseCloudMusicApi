/**
 * services文件api，统一出口
 */
import * as getApi from './services/api'
import * as getUserApi from './services/user'
export default {
  ...getApi,
  ...getUserApi
}
