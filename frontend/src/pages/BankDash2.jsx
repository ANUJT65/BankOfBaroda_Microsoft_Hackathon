import React from 'react'
import Navbar from '../components/BankerNavbar'
import BankNavbar2 from '../components/BankNav2'
import Namaste from '../components/Namaste'
import BankDashGrid from '../components/BankDashGrid'

const BankDash2 = () => {
  return (
    <div className='flex flex-col bg-[#EFEFEF] h-screen'>
        <BankNavbar2 />
        <Namaste />
        <BankDashGrid />
    </div>
  )
}

export default BankDash2