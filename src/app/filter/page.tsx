'use client'

import React from 'react'
import  products  from '../../../public/data/product'
import FilterBar from '@/components/FilterBar'

const Page = () => {
  return (
    <div>
      <FilterBar products={products} />
    </div>
  )
}

export default Page
