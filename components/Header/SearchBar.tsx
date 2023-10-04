import React from 'react'
import { PIMagnifyingGlass } from '../Icons/PIcons'

const SearchBar = () => {
  return (
    <div className="lg:w-125 lg:pl-2 md:w-115">
      <form action="https://formbold.com/s/unique_form_id" method="POST">
        <div className="relative">
          <button className="absolute left-2 top-1/2 -translate-y-1/2">
            <PIMagnifyingGlass />
          </button>

          <input
            type="text"
            placeholder="Type to search..."
            className="h-10 w-full rounded-md bg-transparent/10 pl-10 pr-4 font-medium focus:outline-none xl:w-125"
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
