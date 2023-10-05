import Link from 'next/link'
import React from 'react'
import { PIPlusCircle } from '../Icons/PIcons'

interface ProductCardProps {
  name: string
  price: string
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <Link href={name}>
      <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex h-40 w-40 items-center justify-center  bg-meta-2 dark:bg-meta-4">
          <img src={image} alt={name} />
        </div>

        <div className="mt-4 flex flex-col justify-between">
          <div className="py-2">
            <h4 className="text-title-md text-black dark:text-white">{name}</h4>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <PIPlusCircle />
            <span className={`items-center gap-1 text-lg font-medium `}>
              ${price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
