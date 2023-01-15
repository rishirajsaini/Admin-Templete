import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
     <div className='dflex'>
      <Sidebar />
      <div >
        <h1 className='head'>Dashboard</h1>
    
      </div>
     </div>
    </>
  )
}

export default Dashboard