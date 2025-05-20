import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
    <div className="h-screen flex flex-col">
        <Header/>
        <main className="bg-[#F9F8FE] h-full">
            <Outlet/>
        </main>
        <Footer/>
    </div>
    </>
  )
}

export default Layout