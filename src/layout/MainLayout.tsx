import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar';
import React, { ReactNode } from 'react'

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({children}: MainLayoutProps) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <div className='flex flex-1'>
                <Sidebar />
                <main className='flex-1'>{ children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
