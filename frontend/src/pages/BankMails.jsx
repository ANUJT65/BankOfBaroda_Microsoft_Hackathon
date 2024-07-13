import React from 'react'
import BankerNavbar from '../components/BankerNavbar'
import ApplicationsTable from '../components/ApplicationsTable'
import Pie from '../components/Pie'
import MailsSidebar from '../components/MailsSidebar'
import EmailsTable from '../components/EmailsTable'

const BankMails = () => {
  return (
    <div className='flex flex-col w-full'>
    <BankerNavbar active='Mail'/>
    <div className='italic text-3xl m-5 ml-7'>ML Categorised Mails</div>
    <hr className='border-t border-black mx-4' />
    <div className='flex mt-5'>
        <div className='w-1/5'><MailsSidebar /></div>
        <div className='flex-grow p-4'>
          <EmailsTable />
        </div>
      </div>
    </div>
  )
}

export default BankMails