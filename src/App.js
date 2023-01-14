import React from 'react'

// import TopNavbar from './components/TopNavbar/TopNavbar.js'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Pages from './components/Pages/Pages.js'
import Product from './components/Product/Product';
import Users from './components/Users/Users'
const App = () => {
  return (
    <>
   

    {/* <Home /> */}
    
     <Routes>
        <Route>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
        <Route path='/users' element={<Users />} />
        <Route path='/product' element={<Product />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/login' element={<Login />} />

        </Route>
      </Routes>
    
    </>
  )
}

export default App