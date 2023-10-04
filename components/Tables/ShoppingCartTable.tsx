import Image from 'next/image'
import { Product } from '@/types/product'
import Link from 'next/link'

const productData: Product[] = [
  {
    image:
      '/images/dormakaba/110000001009_coastal_series_1200x1200.jpg_image_slider_product_image_slider_zoom.jpg',
    name: '900mm Door',
    price: 296,
  },
  {
    image:
      '/images/dormakaba/110000001009_coastal_series_1200x1200.jpg_image_slider_product_image_slider_zoom.jpg',
    name: '1000mm Door',
    price: 546,
  },
  {
    image:
      '/images/dormakaba/110000001009_coastal_series_1200x1200.jpg_image_slider_product_image_slider_zoom.jpg',
    name: 'Handles',
    price: 443,
  },
  {
    image:
      '/images/dormakaba/110000001009_coastal_series_1200x1200.jpg_image_slider_product_image_slider_zoom.jpg',
    name: 'Locks',
    price: 499,
  },
]

const ShoppingCartTable = () => {
  return (
    <div className="flex flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {productData.map((product, key) => (
        <li key={key}>
          <Link
            className="flex items-center justify-between gap-4.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4"
            href="/messages"
          >
            <div className="h-12.5 w-12.5 rounded-full">
              <Image width={112} height={112} src={product.image} alt="User" />
            </div>

            <div>
              <h6 className="text-sm font-medium text-black dark:text-white">
                {product.name}
              </h6>
            </div>
            <div>
              <h6 className="text-sm font-medium text-black dark:text-white">
                {`$${product.price}`}
              </h6>
            </div>
          </Link>
        </li>
      ))}
    </div>
  )
}

export default ShoppingCartTable
