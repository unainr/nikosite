import Footer from '@/components/headers/Footer'
import MainHeader from '@/components/headers/SNavbar'
import SNavbar from '@/components/headers/SNavbar'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
   <MainHeader/>
    {children}
    <Footer/>
    </>
  )
}

export default layout