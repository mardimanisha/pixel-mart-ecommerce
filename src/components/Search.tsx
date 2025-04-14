import React, { useState } from 'react'
//import products from '../../public/data/product';
//import Product from './Product';
import { useRouter } from 'next/navigation';

const Search = () => {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && query.trim()) {
            router.push(`/search?query=${encodeURIComponent(query.trim())}`)
        }
    }

    return (
        <div className='w-xl'>
            <input
                type="text"
                name='text'
                placeholder='Search the internet...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className='w-full h-[50px] p-3 text-sm font-monn text-black bg-white border-3 border-black outline-none transition-all duration-300 shadow-[4px_4px_0_black] placeholder-gray-500 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[6px_6px_0_black]'
            />
        </div>
    )
}

export default Search