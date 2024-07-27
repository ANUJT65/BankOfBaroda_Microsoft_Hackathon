import React from 'react';
import ClusteredBarChart from './ClusteredBarChart';
import NewApplicationMenu from './NewApplicationMenu';
import Table from './Table';

const BankDashGrid = () => {
  const he = ['Application Type', 'Application ID', 'Name of Applicant', 'Date', 'Azure ML score']
  const applications=[
    {
        'Application Type' : 'Home Loan',
        'Application ID': '12345678',
        'Name of Applicant': 'Virat Kohli',
        'Date': '11 Jun 2024',
        'Azure ML Score': 'Safe'
    }
  ]


  return (
    <div className='grid grid-cols-12 gap-3 mx-10 mt-2'>
      <div className='bg-white col-span-4 rounded-md p-5 flex flex-col'>
        <div className='font-bold text-xl'>Overview</div>
        <div className='text-[#666666]'>Employee ID: 123456789</div>
        <div className='text-4xl mt-5'>1096</div>
        <div className='text-[#666666]'>Total Applications</div>

        <div className='mt-5 flex flex-col'>
            <div className='flex justify-between border-b py-2'>
                <div className='mr-20'>New Applications</div>
                <div className='font-bold text-[#008000]'>+200</div>
            </div>
            <div className='flex justify-between border-b py-2'>
                <div className='mr-20'>Pending Applications</div>
                <div className='font-bold text-[#008000]'>+100</div>
            </div>
            <div className='flex justify-between border-b py-2'>
                <div className='mr-20'>Repplied</div>
                <div className='font-bold text-[#008000]'>+300</div>
            </div>
        </div>
      </div>

      <div className='bg-white col-span-8 rounded-md p-4 flex flex-col'>
        <div className='font-bold text-xl'>Application Statistics</div>
        <div className='text-[#666666]'>Understand patterns of incoming statistics</div>
        <div>
          <ClusteredBarChart />
        </div>
      </div>

      <div className='bg-white col-span-3 rounded-md flex flex-col p-4'>
        <div className='font-bold text-xl'>Quick Links</div>
        <div className='text-[#666666]'>Navigate between your actions</div>
        <button className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'>
          DataChat
        </button>
        <button className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'>
          AzureML Classified Emails
        </button>
        <button className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'>
          Logout
        </button>
      </div>

      <div className='bg-white col-span-9 rounded-md flex flex-col p-4'>
        <div className=' flex justify-between'>
            <div className='flex flex-col'>
                <div className='font-bold text-xl'>Your Applications</div>
                <div className='text-[#666666]'>Keep track of your bank applications here</div>
            </div>
            
            <div className='search flex justify-center'>
                <input className='bg-gray-200 w-96 py-3 px-3 rounded-l' placeholder='Search Applications..'></input>
                <button className='bg-[#FF5B2E] py-3 px-3 rounded-r hover:bg-black hover:text-white hover:font-bold '>🔎</button> 
            </div>
        </div>
        
        <Table header={he} content={applications}/>
      </div>
    </div>
  )
}

export default BankDashGrid