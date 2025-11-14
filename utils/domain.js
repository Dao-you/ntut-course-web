function createDomain(domainName) {
  const raw = domainName || ''
  let base = raw
  if (base && !base.startsWith('http://') && !base.startsWith('https://')) {
    base = `https://${base}`
  }
  const domainBase = base.endsWith('/') ? base.slice(0, -1) : base
  const domainUrl = (path) => {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    if (!domainBase) return normalizedPath
    return `${domainBase}${normalizedPath}`
  }
  return { domainBase, domainUrl }
}

module.exports = createDomain
module.exports.default = createDomain
