import React from 'react'

const Footer = () => {
    return (
        <footer className=' bg-white text-black z-10'>
            <div className='border-y-4 py-10'>
                <div className='w-full mx-auto flex justify-around text-sm px-24'>
                    <div>
                        <h2 className='text-2xl font-bold tracking-wider'>PIXEL MART</h2>
                        <p className='text-xs mt-1 text-gray-500'>Shop in 8-bit Glory!</p>
                    </div>

                    <div>
                        <h3 className='text-lg uppercase font-bold'>Shop</h3>
                        <ul className="mt-1 space-y-1 text-gray-500">
                            <li>All Collection</li>
                            <li>Vintage</li>
                            <li>Modern</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg uppercase font-bold'>COMPANY</h3>
                        <ul className="mt-1 space-y-1 text-gray-500">
                            <li>About us</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='text-lg uppercase font-bold'>Support</h3>
                        <ul className="mt-1 space-y-1 text-gray-500">
                            <li>FAQs</li>
                            <li>Cookie Policy</li>
                            <li>Terms of use</li>
                        </ul>
                    </div>
                </div>
            </div>
                <div className='text-center text-xs py-6'>
                    © 2025 Pixel Mart. All Rights Reserved.
                </div>
            
        </footer>
    )
}

export default Footer