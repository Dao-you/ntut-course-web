const apiBase = process.env.BASE_URL || 'https://gnehs.github.io/ntut-course-crawler-node'
const apiUrl = (path) => `${apiBase.endsWith('/') ? apiBase.slice(0, -1) : apiBase}${path}`

module.exports = {
  apiBase,
  apiUrl
}
