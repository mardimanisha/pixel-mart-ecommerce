'use client'
import React from 'react'
import Button from './Button'
import { ProductType } from '@/types/Product';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
    const router = useRouter();

    const generateProductUrl = () => {
        const category = product.category.toLowerCase();
        const name = product.name.toLowerCase().replace(/\s+/g, '-');
        return `/category/${category}/${name}`
    }

    const handleCardClick = () => {
        router.push(generateProductUrl());
    }


    return (
        <div onClick={handleCardClick} className="w-64 p-1 border-3 rounded-md shadow-[4px_4px_0_0_black] overflow-hidden flex flex-col items-center pb-4">
            <div className="relative w-full">
                <Image src={product.images} 
                   alt="" width={100} height={100}
                   className="w-full h-52 object-cover" />
            </div>
            <div className="p-1 bg-white">
                <h3 className="text-sm font-bold">{product.name}</h3>
                <div className='flex justify-between items-center mt-1'>
                    <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
                    <div className='flex mb-3'>
                        {[...Array(5)].map((_, i) => (
                            <span 
                                key={i} 
                                className={`text-2xl ${i < product.ratings ? 'text-yellow-400' : 'text-gray-300'}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <Button>ADD TO CART</Button>
        </div>
    )
}

export default Product