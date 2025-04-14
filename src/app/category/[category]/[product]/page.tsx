import React from 'react'
import MainLayout from '@/layout/MainLayout'
import ProductDetail from '@/components/ProductDetail'
import Product from '@/components/Product'
import products from '../../../../../public/data/product'

interface PageProps {
  params: {
    category: string;
    product: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
}

const ProductPage = ({ params }: PageProps) => {
  const { category, product } = params

  const matchedProduct = products.find(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() &&
      p.name.toLowerCase().replace(/\s+/g, '-') === product.toLowerCase()
  )

  if (!matchedProduct) {
    return <MainLayout>Product not found</MainLayout>
  }

  const similarProducts = products.filter(
    (p) => p.category === matchedProduct.category && p.id !== matchedProduct.id
  )

  return (
    <MainLayout>
      <ProductDetail product={matchedProduct} />
      <div className="m-10 max-w-6xl">
        <h1 className="text-2xl font-bold mb-4">Similar Products</h1>
        <div className="flex gap-6 flex-wrap">
          {similarProducts.length > 0 ? (
            similarProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500">No similar products available.</p>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export default ProductPage;

export function generateStaticParams() {
  return products.map((product) => ({
    category: product.category.toLowerCase(),
    product: product.name.toLowerCase().replace(/\s+/g, '-'),
  }))
}