import { apiBase, apiUrl } from '@/utils/api'

export default (_ctx, inject) => {
  inject('apiBase', apiBase)
  inject('api', apiUrl)
}
