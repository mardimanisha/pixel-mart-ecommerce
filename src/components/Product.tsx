import React from 'react'
import Button from './Button'

interface ProductProps {
    product: {
        id: number;
        name: string;
        color: string;
        price: number;
        ratings: number;
        images: string;
    }
}

const Product: React.FC<ProductProps> = ({product}) => {
    return (
        <div className="w-72 p-1 border-3 rounded-md shadow-[4px_4px_0_0_black] overflow-hidden flex flex-col items-center pb-4">
            <div className="relative w-full">
                <img src={product.images} 
                   alt="" 
                   className="w-full h-64 object-cover" />
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
