import React from 'react'
import TopNavbar from './components/TopNavbar/TopNavbar.js'

const Layout = ({children}) => {
  return (
   <>
   <TopNavbar  />
   {children}
   </>
  )
}

export default Layout