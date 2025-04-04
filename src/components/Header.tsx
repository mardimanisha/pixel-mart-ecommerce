import React from 'react'
import Search from './Search'
import NavButton from './NavButton'

const Header = () => {
    return (
        <header className='bg-amber-50 fixed top-0 left-0 z-50 w-full flex justify-between items-center p-4 pl-10 pr-10 border-b-5'>
            <h1 className='text-2xl font-bold'>Pixel Mart</h1>
            <div className='flex gap-8 items-center'>
                <Search />
                <NavButton />
            </div>
        </header>
    )
}

export default Header
