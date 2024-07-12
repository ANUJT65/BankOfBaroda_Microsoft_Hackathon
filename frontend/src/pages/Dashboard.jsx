import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DashboardMain from '../components/DashboardMain'

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className='flex'>
        <Sidebar />
        <DashboardMain />
    </div>
    </>
  )
}

export default Dashboard