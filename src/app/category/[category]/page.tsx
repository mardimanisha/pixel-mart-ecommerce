'use client'
import Button from '@/components/Button'
import MainLayout from '@/layout/MainLayout'
import React, { use, useState } from 'react'
import products from '../../../../public/data/product'
import { notFound } from 'next/navigation'
import Product from '@/components/Product'
import SortDropdown from '@/components/SortDropdown'
import FilterBar from '@/components/FilterBar'

interface Props {
    params: Promise<{ category: string }>;
}

const Category = ({ params }: Props) => {
    const { category } = use(params);

    const [showSort, setShowSort] = useState(false);
    const [sortOption, setSortOption] = useState('rating');
    const [showFilter, setShowFilter] = useState(false);

    //Filter states
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedRating, setSelectedRating] = useState(0)
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])

    const categoryProducts = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
    )

    if (categoryProducts.length === 0) return notFound();

    // Apply filters
    const filteredProducts = categoryProducts.filter((product) => {
        const matchesColor = selectedColor ? product.color === selectedColor : true
        const matchesSize = selectedSize ? product.sizes.includes(selectedSize) : true
        const matchesRating = product.ratings >= selectedRating
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

        return (
            matchesColor &&
            matchesSize &&
            matchesRating &&
            matchesPrice
        )
    })
 
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOption === 'rating') return b.ratings - a.ratings;
        if (sortOption === 'priceLowToHigh') return a.price - b.price;
        if (sortOption === 'priceHighToLow') return b.price - a.price;
        return 0;
});

    // Sorting logic
    

    return (
        <MainLayout>
            <div className="max-w-[97.6rem] mt-20">

                {/* Header: Sort + Filter Buttons */}
                <div className="flex gap-8 py-8 pl-10 border-b-4 relative bg-white w-[90.5%]">
                    <div className="relative">
                        <Button onClick={() => setShowSort(prev => !prev)}>Sort</Button>

                        {/* Dropdown toggled by Sort button */}
                        {showSort && (
                            <div className="absolute w-56 left-0 top-full mt-2 z-10 bg-white border border-gray-300 shadow-lg rounded">
                                <SortDropdown
                                    value={sortOption}
                                    onChange={(value) => {
                                        setSortOption(value)
                                        setShowSort(false)
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    <Button onClick={() => setShowFilter((prev) => !prev)}>Filter</Button>
                </div>
                
                {showFilter && (
                    <FilterBar
                        products={categoryProducts}
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize}
                        selectedRating={selectedRating}
                        setSelectedRating={setSelectedRating}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        onApply={() => {}}
                    />
                )}

                {/* Product List */}
                <div className="p-10">
                    <h1 className="text-2xl mb-8 capitalize">{category}</h1>
                    <div className="w-[90%] grid grid-cols-4 grid-flow-row gap-6">
                        {sortedProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Category

