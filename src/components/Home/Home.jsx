import React from 'react'
import './Home.css'
// import Sidebar from '../Sidebar/Sidebar'
import Layout from '../../Layout'
// import HomeSidebar from './HomeSidevar'
// import Chat from './Chat'

const Home = () => {
  return (
    <>
      <Layout>
        {/* <div className='home'>
          <div className='container'>
          <HomeSidebar />
       <Chat />
          </div>
        </div> */}
        <div className='home'>
        <p className='Home-title'>
          Welcome to the Home page
        </p>
        </div>
      </Layout>

    </>
  )
}

export default Home