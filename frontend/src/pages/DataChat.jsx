import React from 'react'
import BankerNavbar from '../components/BankerNavbar'
import Sidebar from '../components/Sidebar'
import EmailEntry from '../components/EmailEntry'
import EmailsTable from '../components/EmailsTable'
import DataChatSidebar from '../components/DataChatSidebar'
import Chat from '../components/Chat'

const DataChat = () => {
  return (
    <div className='flex flex-col w-full'>
      <BankerNavbar active='DataChat'/>
      <div className='italic text-3xl m-5 ml-7'>    Chat with Database using Azure Generative AI</div>
      <hr className='border-t border-black mx-4' />
      <div className='flex mt-5'>
        <div className='w-1/5'><DataChatSidebar /></div>
        <div className='flex-grow p-4'>
          <Chat />
        </div>
      </div>
    </div>
  )
}

export default DataChat