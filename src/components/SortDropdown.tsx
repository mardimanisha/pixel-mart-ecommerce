'use client'
import React from 'react'

type Props = {
    onChange: (value: string) => void;
    value: string;
}

const SortDropdown: React.FC<Props> = ({onChange, value}) => {
    return (
        <select className='w-56 border border-black text-xs p-2'
            value={value}
            onChange={(e) => onChange(e.target.value)}>
            <option value="rating">Sort by Ratings</option>
            <option value="priceLowToHigh">Low to High</option>
            <option value="priceHighToLow">High to Low</option>
        </select>
    )
}

export default SortDropdown
