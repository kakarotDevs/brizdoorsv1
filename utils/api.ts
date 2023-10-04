import stripeClient from './stripe-loader'

const createURL = (path) => {
  return window.location.assign + path
}

export const createCheckoutSession = async () => {
  const res = await fetch(
    new Request(createURL('/api/checkout_sessions'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  )
  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}
