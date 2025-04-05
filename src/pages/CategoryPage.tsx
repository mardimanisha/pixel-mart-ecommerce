import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import Button from '../components/Button'

const CategoryPage = () => {
    return (
        <MainLayout>
            <div className="max-w-[97.6rem] my-20 h-[100vh]">
                <div className='flex gap-8 py-8 pl-10 border-b-4'>
                    <Button>Sort</Button>
                    <Button>Filter</Button>
                </div>

                <div className='p-10'>
                    <h1 className='text-2xl mb-8'>Category</h1>

                    <div></div>
                </div>

                
            </div>
            
        </MainLayout>
    )
}

export default CategoryPage
