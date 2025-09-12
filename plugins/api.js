import api from '@/utils/api'

export default (_ctx, inject) => {
  const { apiBase, apiUrl } = api

  inject('apiBase', apiBase)
  inject('api', apiUrl)
}
