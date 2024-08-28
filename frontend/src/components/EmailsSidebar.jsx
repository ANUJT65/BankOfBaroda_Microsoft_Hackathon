import React from 'react'

const EmailsSidebar = () => {
  return (
    <div className='flex flex-col p-4'>
        <div className='mb-5'>
        <div className='text-2xl'>Sort by</div>
        <div className='text-md text-gray-500'>All mail</div>
        <div className='text-md text-gray-500'>Needs attention</div>
        <hr className='border-black mt-2'></hr>
        </div>
       

        <div className='mb-5'>
        <div className='text-2xl'>Categories</div>
        <div className='text-md text-gray-500'>Loans</div>
        <div className='text-md text-gray-500'>Fraud</div>
        <div className='text-md text-gray-500'>Customer Service</div>
        <div className='text-md text-gray-500'>Withdrawal Issues</div>
        <hr className='border-black mt-2'></hr>
        </div>

    </div>
  )
}

export default EmailsSidebar