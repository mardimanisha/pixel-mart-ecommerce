import React from 'react'

const Button = ({children}) => {
    return (
        <div>
            <button className='border-3 h-10 w-56 rounded-md shadow-[4px_4px_0_0_black] font-bold text-sm bg-amber-50 hover:cursor-pointer hover:bg-black hover:text-amber-50 hover:border-black'>{ children }</button>
        </div>
    )
}

export default Button
