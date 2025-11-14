import createDomain from '@/utils/domain'

export default (context, inject) => {
  const domainName = context.$config.domainName || process.env.DOMAIN_NAME || ''
  const { domainBase, domainUrl } = createDomain(domainName)

  inject('domainBase', domainBase)
  inject('domain', domainUrl)
}
