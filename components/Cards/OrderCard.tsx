import Link from 'next/link'
import React from 'react'

interface OrderCardProps {
  name: string
  content: string
}

const OrderCard: React.FC<OrderCardProps> = ({ name, content }) => {
  return (
    <Link href={name}>
      <div className="rounded-lg w-50 h-50 border border-stroke bg-white px-4 py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div>
          <div className="py-2">
            <h4 className="text-title-md text-black dark:text-white">{name}</h4>
          </div>
          <div>
            <span className={`items-center text-lg font-medium `}>
              {content}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default OrderCard
