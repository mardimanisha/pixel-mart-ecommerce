import React from 'react'

const Search = () => {
    return (
        <div className='w-xl'>
            <input type="text" name='text' placeholder='Search the internet...' className='w-full h-[50px] p-3 text-sm font-monn text-black bg-white border-3 border-black outline-none transition-all duration-300 shadow-[4px_4px_0_black] placeholder-gray-500 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[6px_6px_0_black]'/>
        </div>
    )
}

export default Search