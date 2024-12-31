import Footer from '@/components/headers/Footer'
import SNavbar from '@/components/headers/SNavbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <SNavbar/>
    {children}
    <Footer/>
    </>
  )
}

export default layout