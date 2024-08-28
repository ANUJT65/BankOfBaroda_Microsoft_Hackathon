import React from 'react'
import Navbar from '../components/Navbar'
import EmailsSidebar from '../components/EmailsSidebar'
import EmailsList from '../components/EmailsList'
import EmailSingle from '../components/EmailSingle'
import { EmailProvider } from '../contexts/MailContext';

const Emails = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='grid grid-cols-9 h-screen'>
            <div className=' col-span-2'>
                <EmailsSidebar />
            </div>
            <EmailProvider>
                <div className='border bg-gray-200 col-span-3'><EmailsList /></div>
                <div className='col-span-4'><EmailSingle /></div>
            </EmailProvider>
        </div>
    </div>
  )
}

export default Emails