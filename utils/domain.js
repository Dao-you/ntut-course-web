function createDomain(domainName) {
  const sanitized = (domainName || '').replace(/^https?:\/\//, '').replace(/\/+$/, '') || 'ntut-course.gnehs.net'

  const buildOrigin = (protocol) => `${protocol}://${sanitized}`
  const ensurePath = (path = '/') => {
    if (!path) return '/'
    return path.startsWith('/') ? path : `/${path}`
  }
  const createUrlBuilder = (protocol) => (path = '/') => {
    const normalizedPath = ensurePath(path)
    return `${buildOrigin(protocol)}${normalizedPath}`
  }

  const httpsOrigin = buildOrigin('https')
  const httpOrigin = buildOrigin('http')

  const httpsUrl = createUrlBuilder('https')
  const httpUrl = createUrlBuilder('http')

  return {
    domainName: sanitized,
    origin: httpsOrigin,
    httpsOrigin,
    httpOrigin,
    url: httpsUrl,
    httpsUrl,
    httpUrl,
  }
}

module.exports = createDomain
module.exports.default = createDomain
