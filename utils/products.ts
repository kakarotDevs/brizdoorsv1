import stripeClient from './stripe-loader'

const getStripeProducts = async () => {
  const stripe = await stripeClient()
  const products = await stripe.products.list({
    limit: 3,
  })
  return products
}

export default getStripeProducts
