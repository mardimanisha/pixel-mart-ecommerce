'use client'
import React, { useRef } from 'react'
import Product from './Product'
import products from '../../public/data/product'
import { ChevronLeft, ChevronRight } from 'lucide-react';
//import { ProductType } from '@/types/Product';

interface SectionProps {
    title: string;
    filterType: 'featured' | 'new' ;
}

const Section: React.FC<SectionProps> = ({ title, filterType }) => {

    const scrollRef = useRef<HTMLDivElement>(null);


    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;

            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: 'smooth',
            })
        }
    };
    
    
    const filteredProducts = products.filter(product => product[filterType] === true)

    

    return (
        <div className='m-10 relative w-full'>
            <h1 className='text-2xl font-bold'>{title}</h1>

            <div className='relative'>
                <button onClick={() => scroll('left')}
                    className='cursor-pointer absolute left-[-25px] top-1/2 -translate-y-1/2 z-20 text-2xl font-bold bg-white border border-black px-2 py-1'>
                    <ChevronLeft />
                </button>
                


                <div ref={scrollRef} className='py-8 flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth max-w-full'>
                    {filteredProducts.length > 0 ? (
                       filteredProducts.map((product) => (
                            <div key={product.id} className='min-w-[220px] flex-shrink-0'>
                                <Product product={product} />
                            </div>
                        ))
                    ) : (
                        <p className='text-gray-500'>No products available.</p>
                    )}
                </div>

                
                    <button onClick={() => scroll('right')}
                        className='absolute right-[-25px] top-1/2 -translate-y-1/2 z-20 text-2xl font-bold bg-white border border-black px-2 py-1 cursor-pointer'>
                            <ChevronRight />
                    </button>
                
            </div>
        </div>
    )
}

export default Section
