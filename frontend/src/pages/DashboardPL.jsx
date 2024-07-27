import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DashboardMainPL from '../components/DashboardMainPL'

const Dashboard = () => {
  return (
    <>
    <Navbar />
    <div className='flex'>
        <Sidebar />
        <DashboardMainPL />
    </div>
    </>
  )
}

export default Dashboard