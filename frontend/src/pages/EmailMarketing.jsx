import React from 'react'
import Navbar from '../components/Navbar'
import EmailMarketingSidebar from '../components/EmailMarketingSidebar'
import EmailMarketingTable from '../components/EmailMarketingTable'

const EmailMarketing = () => {
  return (
    <div className='flex flex-col bg-gray-200'>
        <Navbar />

        <div className='grid grid-cols-9 h-screen'>
                <EmailMarketingSidebar />



            <div className='col-span-7 bg-gray-200'>
                <div className='p-4 flex flex-col'>
                    <div className='flex justify-around'>
                        <input className='w-full border border-gray-400 p-2' placeholder='Enter scheme name'></input>
                        <button className='bg-black text-white px-3 w-1/4'>Generate Campaign</button>
                    </div>

                    <div className='text-3xl mt-4'>Email Draft</div>
                    <textarea className='my-4 p-4 border border-gray-400'></textarea>                 
                    
                    <EmailMarketingTable />
                    
                    <button className='w-full py-2 px-4 bg-[#FF5B2E] mt-10 text-xl font-bold hover:bg-black hover:text-white'>Launch Campaign</button>

                </div>
            </div>
        </div>

    </div>
  )
}

export default EmailMarketing