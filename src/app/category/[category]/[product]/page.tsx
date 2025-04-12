import ProductDetail from '@/components/ProductDetail'
import React from 'react'
import products from '../../../../../public/data/product'
import MainLayout from '@/layout/MainLayout'
import Product from '@/components/Product'

interface PageProps {
    params: {
        category: string
        product: string
    }
}

const ProductPage = ({ params }: PageProps) => {
    const { category, product } = params
    
    const matchedProduct = products.find((p) => 
        String(p.category).toLowerCase() === category.toLowerCase() &&
        String(p.name).toLowerCase().replace(/\s+/g, '-') === product.toLowerCase()
    )
    
    if(!matchedProduct){
        return (
            <MainLayout>Product not found</MainLayout>
        )
    }

    const similarProducts = products.filter((p) => p.category === matchedProduct.category && p.id !== matchedProduct.id)

    return (
        <MainLayout>
            <ProductDetail product={matchedProduct} />
            <div className='m-10 w-6xl'>
                <h1 className='text-2xl font-bold mb-4'>Similar Products</h1>
                <div className='flex gap-6 flex-wrap'>
                    {similarProducts.length > 0 ? (
                        similarProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))
                    ) : (
                        <p className='text-gray-500'>No similar products available.</p>
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

export default ProductPage
