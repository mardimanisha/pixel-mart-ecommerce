import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Wishlist from './wishlist/Wishlist'
import { ProductType } from '@/types/Product';

type ProductDetailProps = {
  product: ProductType;
};

const ProductDetail = ({product}: ProductDetailProps) => {
    return (
        <div className='max-w-4xl my-35 ml-40 p-3 gap-2 flex border-black border-2 rounded-lg h-[500px]'>
            <div className='w-[70%]'>
                <Image src={product.images} alt={product.name} width={350} height={100} className='h-[100%]' />
            </div>

            <div className='flex flex-col p-4 w-4xl h-[100%]'>
                <div className='flex flex-col gap-3 text-xs text-gray-800'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-sm font-bold text-gray-900'>{product.name}</h2>
                        <Wishlist />
                    </div>
                    
                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-500'>Color: </p>
                        <div>{product.color}</div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-500'>Size: </p>
                        <div className='flex gap-2'>
                            {product.sizes.map((size, index) => (
                                <div key={index} className='px-3 py-1 border border-gray-400 rounded-md text-sm hover:bg-black hover:text-white cursor-pointer transition'>
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-500'>Description: </p>
                        <div>{product.description}</div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-gray-500'>Fabric: </p>
                        <div>{product.fabric}</div>
                    </div>

                    <div className='flex items-center gap-2'>
                        <p className='text-gray-500'>Price: </p>
                        <h5 className='text-sm font-bold'>${product.price}</h5>

                    </div>
                    
                    <div className='flex flex-row justify-start items-center gap-4'>
                        <Button>ADD TO CART</Button>
                        <div className='flex justify-around gap-0.5 cursor-pointer'>
                            <div className='border-1 p-2 shadow-[2px_2px_0_0_black] hover:scale-105'>-</div>
                            <div className='border-1 p-2 shadow-[2px_2px_0_0_black]'>0</div>
                            <div className='border-1 p-2 shadow-[2px_2px_0_0_black] hover:scale-105'>+</div>
                        </div>
                    </div>

                    <div className='flex gap-1.5'>
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
        </div>
    )
}

export default ProductDetail
