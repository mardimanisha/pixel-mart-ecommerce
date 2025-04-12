'use client'

import React from 'react'
import { ProductType } from '@/types/Product'
import FilterDropdown from './FilterDropdown'
//import Button from './Button'

type Props = {
  products: ProductType[]
  selectedColor: string
  setSelectedColor: (color: string) => void
  selectedSize: string
  setSelectedSize: (size: string) => void
  selectedRating: number
  setSelectedRating: (rating: number) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
  onApply?: () => void
}

const FilterBar: React.FC<Props> = ({
  products,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  selectedRating,
  setSelectedRating,
  priceRange,
    setPriceRange,
}) => {
  const colors = Array.from(new Set(products.map((p) => p.color)))
    const sizes = Array.from(new Set(products.flatMap((p) => p.sizes)))
    
    const handleClearFilters = () => {
        setSelectedColor('')
        setSelectedSize('')
        setSelectedRating(0);
        setPriceRange([0, 1000]);
    }

  return (
      <div className="w-[91%] flex flex-col md:flex-row md:items-start md:justify-between text-xs p-4 px-10 border-b border-gray-300">
          <div className='flex flex-row gap-10'>
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

                <div className="flex flex-col">
                    <label className="mb-1 font-medium items-center gap-2">Min Rating</label>
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
        </div>
          </div>
        
      
        {/* Clear Button */}
        <div className='flex flex-col md:flex-row items-center gap-2 mt-4 md:mt-2'>
            <button className='border-2 px-4 py-2 rounded-sm cursor-pointer hover:scale-105 transition-all duration-200' onClick={handleClearFilters}>Clear Filters</button>
        </div>
    </div>
  )
}

export default FilterBar
