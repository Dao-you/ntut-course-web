const apiBase = process.env.BASE_URL || 'https://gnehs.github.io/ntut-course-crawler-node'

const apiUrl = (path) => {
  const base = apiBase.endsWith('/') ? apiBase.slice(0, -1) : apiBase
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}

module.exports = {
  apiBase,
  apiUrl
}
