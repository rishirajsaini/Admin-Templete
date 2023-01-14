import React from 'react'
import './Home.css'
import Sidebar from '../Sidebar/Sidebar'
import Layout from '../../Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <div className='d'>
          {/* <Sidebar /> */}
          <div className='heading'>
            Home Page
          </div>
        </div>
      </Layout>

    </>
  )
}

export default Home