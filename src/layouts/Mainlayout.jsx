import React from 'react'
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router'

export const Mainlayout = () => {
  return (
    <div>
        
        <Nav />
        
          <Outlet/>
        <Footer />
    </div>
  )
}
