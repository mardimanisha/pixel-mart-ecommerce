'use client'
import React, { useEffect, useRef, useState } from 'react'
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
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollBy = 300;
    
    const filteredProducts = products.filter(product => product[filterType] === true)

    const updateScrollButtons = () => {
        const el = scrollRef.current;
        if (!el) return;

        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }

    const handleScroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -scrollBy : scrollBy;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
            
            setTimeout(() => {
                updateScrollButtons()
            }, 300)
        }
    }

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        updateScrollButtons()

        el.addEventListener('scroll', updateScrollButtons);
        window.addEventListener('resize', updateScrollButtons)

        return () => {
            el.removeEventListener('scroll', updateScrollButtons);
            window.removeEventListener('resize', updateScrollButtons)
        }
    }, [])

    return (
        <div className='m-10 relative w-full'>
            <h1 className='text-2xl font-bold'>{title}</h1>

            <div className='relative'>
                {canScrollLeft && (
                    <button onClick={() => handleScroll('left')}
                        className='absolute left-[-25px] top-1/2 -translate-y-1/2 z-20 text-2xl font-bold bg-white border border-black px-2 py-4 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300'>
                        <ChevronLeft />
                    </button>
                )}
                
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

                {canScrollRight && (
                    <button onClick={() => handleScroll('right')}
                        className='absolute right-[-25px] top-1/2 -translate-y-1/2 z-20 text-2xl font-bold border border-black bg-white px-2 py-4 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300'>
                            <ChevronRight />
                    </button>
                )}
                
            </div>
        </div>
    )
}

export default Section


