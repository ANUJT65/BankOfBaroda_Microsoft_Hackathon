import React from 'react'
import BankNavbar2 from '../components/BankNav2'
import Namaste from '../components/Namaste'
import BankDashGrid from '../components/BankDashGrid'
import { CategoryProvider } from '../contexts/categoryContext'

const BankDash2 = () => {
  return (
    <div className='flex flex-col bg-[#EFEFEF] h-full pb-3'>
        <BankNavbar2 />
        <Namaste />
        <CategoryProvider>
          <BankDashGrid />
        </CategoryProvider>
    </div>
  )
}

export default BankDash2