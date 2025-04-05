import React, { useEffect, useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import Button from '../components/Button'
import {getProductsByCategory} from '../services/productService'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [categoryName, setCategoryName] = useState('')

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            setLoading(true);
            try {
                const products = await getProductsByCategory(categoryId);
                setProducts(products);
                setCategoryName(categoryId || 'Category Not Found')
            } catch (error) {
                console.error("Error loading products:", error);
                setProducts([]);
                setCategoryName("Category Not Found");
            } finally {
                setLoading(false)
            }
        };

        fetchCategoryProducts();
    }, [categoryId]);

    //Loading State
    if (loading) {
        return (
            <MainLayout>
                <div className="max-w-[97.6rem] my-20 h-[100vh]">
                    <p>Loading products</p>
                </div>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <div className="max-w-[97.6rem] my-20 h-[100vh]">
                <div className='flex gap-8 py-8 pl-10 border-b-4'>
                    <Button>Sort</Button>
                    <Button>Filter</Button>
                </div>

                <div className='p-10'>
                    <h1 className='text-2xl mb-8'>{categoryName}</h1>

                    <div></div>
                </div>

                
            </div>
            
        </MainLayout>
    )
}

export default CategoryPage
