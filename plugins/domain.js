import createDomain from '@/utils/domain'

export default (context, inject) => {
  const domain = createDomain(context.$config.domainName)
  inject('domain', domain)
}
