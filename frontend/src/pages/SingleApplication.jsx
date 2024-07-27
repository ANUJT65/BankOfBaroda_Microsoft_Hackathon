import React from 'react'
import BankNavbar2 from '../components/BankNav2'
import Namaste from '../components/Namaste'
import SingleApplicationGrid from '../components/SingleApplicationGrid'

const SingleApplication = () => {
  return (
    <div className='flex flex-col bg-gray-100 h-full'>
        <BankNavbar2 />
        <Namaste />
        <SingleApplicationGrid />
    </div>
  )
}

export default SingleApplication