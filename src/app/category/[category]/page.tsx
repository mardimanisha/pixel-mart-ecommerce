'use client'
import Button from '@/components/Button'
import MainLayout from '@/layout/MainLayout'
import React, { use } from 'react'
import products from '../../../../public/data/product'
import { notFound } from 'next/navigation'
import Product from '@/components/Product'

interface Props {
    params: Promise<{ category: string }>;
}

const Category = ({ params }: Props) => {
    const { category } = use(params)
    
    const filteredProducts = products.filter(
        (product: { category: string }) => product.category.toLowerCase() === category.toLowerCase()
    )

    if(filteredProducts.length === 0) return notFound()

    return (
        <MainLayout>
            <div className="max-w-[97.6rem] mt-20">
                <div className='flex gap-8 py-8 pl-10 border-b-4'>
                    <Button>Sort</Button>
                    <Button>Filter</Button>
                </div>

                <div className='p-10'>
                    <h1 className='text-2xl mb-8 capitalize'>{category}</h1>

                    <div className='w-[90%] grid grid-cols-4 grid-flow-row gap-6'>
                        {filteredProducts.map((product) => (
                            <Product key={product.id} product={product}/>
                        ))}
                    </div>
                </div>           
            </div>   
        </MainLayout>
    )
}

export default Category

