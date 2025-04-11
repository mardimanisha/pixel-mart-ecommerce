'use client'
import React from 'react'

type Props = {
    onChange: (value: string) => void;
}

const SortDropdown: React.FC<Props> = ({onChange}) => {
    return (
        <select className='border border-black px-4 py-2'
        onChange={(e) => onChange(e.target.value)}>
            <option value="rating">Sort by Ratings</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
        </select>
    )
}

export default SortDropdown
