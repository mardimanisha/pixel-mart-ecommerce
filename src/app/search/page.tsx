import MainLayout from "@/layout/MainLayout"
import products from "../../../public/data/product"
import Product from "@/components/Product"

interface SearchParams {
    searchParams: {
        query: string
    }
}

export default function SearchPage({ searchParams }: SearchParams) {
    const query = searchParams.query?.toLowerCase() || ''

    const matchedProducts = products.filter((product) => product.name.toLowerCase().includes(query))

    return (
        <MainLayout>
            <div className="mt-20 p-10">
                <h1 className="text-2xl font-bold mb-4">Search Results for &quot;{query}&quot;</h1>
            
                {matchedProducts.length > 0 ? (
                    <div className="flex gap-6 flex-wrap">
                        {matchedProducts.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p className='text-gray-500'>No products found for &quot;{query}&quot;</p>
                )}
            </div>
            
        </MainLayout>
    )
}