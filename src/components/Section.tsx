import React from 'react'
import Product from './Product'
import products from '../../public/data/product'
//import { ProductType } from '@/types/Product';

interface SectionProps {
    title: string;
    filterType: 'featured' | 'new';
}

const Section: React.FC<SectionProps> = ({ title, filterType }) => {
    
    const filteredProducts = products.filter(product => product[filterType] === true)
    return (
        <div className='m-10'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <div className='py-8 flex gap-6 flex-wrap'>
                {filteredProducts.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default Section