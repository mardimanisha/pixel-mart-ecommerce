import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import CoverCard from '../components/CoverCard'
import Banner from '../components/Banner'
import Section from '../components/Section'
import covers from '../../public/data/cover'

const HomePage = () => {
    return (
        <MainLayout>
            <div className='container m-10 pt-10 w-[83%]'>
                <div className="m-10 flex flex-row justify-evenly items-center w-full px-[2rem] gap-8 border-2 p-8 overflow-auto">
                    {covers.slice(0,2).map((cover) => (
                        <CoverCard key={cover.id} name={cover.name} image={cover.images} />
                    ))}
                </div>
                <Banner />
                <Section title="Featured Products" filterType="featured" />
                <Section title="New Arrivals" filterType="new" />
                <div className='m-10'>
                    <h1 className='text-2xl font-bold'>Explore More</h1>
                    <div className='grid grid-cols-2 gap-10 py-8'>
                        {covers.slice(2, 6).map((cover) => (
                            <CoverCard key={cover.id} name={cover.name} image={cover.images} />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default HomePage
