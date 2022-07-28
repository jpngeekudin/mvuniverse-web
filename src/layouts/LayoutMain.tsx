import Navbar from 'components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function LayoutMain() {
  return (
    <div className='container py-4'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
