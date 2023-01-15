import React from 'react'

// import TopNavbar from './components/TopNavbar/TopNavbar.js'
import { Route, Routes } from 'react-router-dom';

import Appearnace from './components/Appearnace/Appearnace';
import Customize from './components/Appearnace/Customize/Customize';
import Menus from './components/Appearnace/Menus/Menus';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Media from './components/Media/Media';
import { AddNew } from './components/Pages/AddNew/AddNew';
import AllPages from './components/Pages/AllPages/AllPages';
import Pages from './components/Pages/Pages.js'
import Plugins from './components/Plugins/Plugins';
import AllPost from './components/Post/AllPost/AllPost';
import Categories from './components/Post/Categories/Categories';
import Post from './components/Post/Post';
import PostAddNew from './components/Post/PostAddNew/PostAddNew';
import Product from './components/Product/Product';
import Settings from './components/Settings/Settings';
import SignUp from './components/SignUp/SignUp';
import AllAddNew from './components/Users/AllAddNew/AllAddNew';
import AllUsers from './components/Users/AllUsers/AllUsers';
import Profile from './components/Users/Profile/Profile';
import Users from './components/Users/Users'
const App = () => {
  return (
    <>
   

 
    
     <Routes>
        <Route>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
        <Route path='/users' element={<Users />} />
        <Route path='/product' element={<Product />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/post' element={<Post />} />
        <Route path='/media' element={<Media />} />
        <Route path='/appearnace' element={<Appearnace />} />
        <Route path='/plugins' element={<Plugins />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/allpages' element={<AllPages/>} />
        <Route path='/addnew' element={<AddNew />} />
        <Route path='/allpost' element={<AllPost />} />
        <Route path='/postaddnew' element={<PostAddNew />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/customize' element={<Customize />} />
        <Route path='/menus' element={<Menus />} />
        <Route path='/allusers' element={<AllUsers />} />
        <Route path='/alladdnew' element={<AllAddNew />} />
        <Route path='/profile' element={<Profile />} />
        

        </Route>
      </Routes>
    
    </>
  )
}

export default App