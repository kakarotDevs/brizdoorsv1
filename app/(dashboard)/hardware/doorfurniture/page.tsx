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
      Door Furniture:
      {data.map((p) => (
        <div>
          <h1>{p.name}</h1>
          <p>{p.description}</p>
          <img src={p.images[0]} alt="" />
        </div>
      ))}
    </div>
  )
}

export default DoorFurniture
