export const apiBase = process.env.base_url || 'https://gnehs.github.io/ntut-course-crawler-node'
export const apiUrl = (path) => `${apiBase.endsWith('/') ? apiBase.slice(0, -1) : apiBase}${path}`
