export function decodeCanvasRequest(signedRequest) {
  if (!signedRequest) return null

  const parts = signedRequest.split('.')
  if (parts.length !== 2) return null

  const payload = parts[1]
    .replace(/-/g, '+')
    .replace(/_/g, '/')

  try {
    const json = atob(payload)
      .split('')
      .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
      .join('')

    return JSON.parse(decodeURIComponent(json))
  } catch (e) {
    console.error('Failed to decode Canvas payload', e)
    return null
  }
}
