import ProductCard from '@/components/ProductCard'
import getStripeProducts from '@/utils/products'

const getDoorFurniture = async () => {
  // get list from stripe
  const doorFurniture = await getStripeProducts()

  return doorFurniture
}

const DoorFurniture = async () => {
  const { data } = await getDoorFurniture()

  return (
    <div>
      <h1 className="pb-4 text-3xl">Dormakaba</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {data
          .map((p) => (
            <ProductCard
              name={p.metadata.name}
              price={p.metadata.price}
              image={p.images[0]}
            ></ProductCard>
          ))
          .reverse()}
      </div>
    </div>
  )
}

export default DoorFurniture
