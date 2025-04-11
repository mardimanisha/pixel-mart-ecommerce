'use client'

import React, { useState } from 'react'
import { ProductType } from '@/types/Product'
import FilterDropdown from './FilterDropdown'

type Props = {
  products: ProductType[]
}

const FilterBar: React.FC<Props> = ({ products }) => {
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedRating, setSelectedRating] = useState(0)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500])

  // Extract unique values
  const colors = Array.from(new Set(products.map(p => p.color)))
  const sizes = Array.from(new Set(products.flatMap(p => p.sizes)))
  const categories = Array.from(new Set(products.map(p => p.category)))

  return (
    <div className="flex flex-col md:flex-row md:items-end gap-4 p-4 border-b border-gray-300">
      <FilterDropdown
        label="Color"
        options={colors}
        selectedOption={selectedColor}
        onSelect={setSelectedColor}
      />
      <FilterDropdown
        label="Size"
        options={sizes}
        selectedOption={selectedSize}
        onSelect={setSelectedSize}
      />
      <FilterDropdown
        label="Category"
        options={categories}
        selectedOption={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Min Rating</label>
        <input
          type="range"
          min={0}
          max={5}
          step={0.5}
          value={selectedRating}
          onChange={(e) => setSelectedRating(parseFloat(e.target.value))}
        />
        <span>{selectedRating} ⭐</span>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-medium">Price Range ($)</label>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            className="w-20 p-1 border rounded"
            value={priceRange[0]}
            min={0}
            max={priceRange[1]}
            onChange={(e) =>
              setPriceRange([parseInt(e.target.value), priceRange[1]])
            }
          />
          <span>-</span>
          <input
            type="number"
            className="w-20 p-1 border rounded"
            value={priceRange[1]}
            min={priceRange[0]}
            max={1000}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
          />
        </div>
        <span className="text-sm text-gray-500">
          ${priceRange[0]} - ${priceRange[1]}
        </span>
      </div>
    </div>
  )
}

export default FilterBar
