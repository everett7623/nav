const API_URL = 'https://api.yoursite.com'

export async function addSite(site) {
  const response = await fetch(`${API_URL}/sites`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(site),
  })
  if (!response.ok) {
    throw new Error('Failed to add site')
  }
  return response.json()
}
