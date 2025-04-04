import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const MainLayout = ({children}) => {
    return (
        <div>
            <Header />
            <div className='flex'>
                <Sidebar />
                <main className='flex-1'>{children }</main>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
