import React from 'react'

const MailsSidebar = () => {
  return (
    <div className='flex flex-col mx-4'>
        <div className='my-3 font-bold'>Categories</div>
        <div className='my-2 bg-black text-white font-bold p-2'>Unauthorized Withdrawl</div>
        <div className='my-2'>Transaction Fraud</div>
        <div className='my-2'>Loan Inquiries</div>
        <div className='my-2'>Feedback</div>
    </div>
  )
}

export default MailsSidebar