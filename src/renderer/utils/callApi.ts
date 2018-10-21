export const API_ENDPOINT = 'https://api.opendota.com'

export const callApi = async (method: string, path: string, data?: any) => {
  const res = await fetch(`${API_ENDPOINT}/api${path}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  return res.json()
}
