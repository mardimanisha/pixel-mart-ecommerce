import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <div>
            <button className='border-3 h-10 w-56 rounded-md shadow-[4px_4px_0_0_black] font-bold text-sm bg-amber-50 hover:cursor-pointer hover:bg-black hover:text-amber-50 hover:border-black'
                {...props}
            >{children}</button>
        </div>
    )
}

export default Button