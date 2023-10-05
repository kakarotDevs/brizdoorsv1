const createURL = (path) => {
  return window.location.origin + path
}

export const createCheckoutSession = async (session) => {
  console.log('got here')
  const res = await fetch(
    new Request(createURL('/api/checkout_sessions'), {
      method: 'POST',
      body: JSON.stringify({ session }),
    }),
  )
  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}
