import React from 'react'
import ClusteredBarChart from './ClusteredBarChart'

const BankDashGrid = () => {
  return (
    <div className='grid grid-cols-12 gap-3 mx-10 mt-2'>
        <div className='bg-white col-span-4 rounded-md p-3 flex flex-col p-4'>
            <div className='font-bold text-xl'>Savings A/C</div>
            <div className='text-[#666666]'>123456789</div>
            <div className='text-3xl mt-5'>₹ 69,420.00</div>
            <div className='text-[#666666]'>Available Balance</div>
        </div>

        <div className='bg-white col-span-8 rounded-md p-4 flex flex-col'>
            <div className='font-bold text-xl'>Spending Statistics</div>
            <div className='text-[#666666]'>Understand patterns in spending money</div>
            <div><ClusteredBarChart /></div>
        </div>


        <div className='bg-white col-span-3 rounded-md flex flex-col p-4'>
            <div className='font-bold text-xl'>Quick Links</div>
            <div className='text-[#666666]'>Navigate between your actions</div>
            <button className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'>Complaints</button>
            <button className='text-left px-4 font-bold  py-3 mt-3 bg-black text-white rounded-md'>Applications</button>
        </div>

        <div className='bg-white col-span-9 rounded-md flex flex-col p-4'>
            <div className='font-bold text-xl'>Your Applications</div>
            <div className='text-[#666666]'>Keep track of your bank applications here</div>
            <table className='mt-2 table-auto px-2'>
                <thead className='bg-gray-100 text-left rounded-md'>
                    <tr className='px-2'>
                        <th>Application Type</th>
                        <th>Application ID</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
  )
}

export default BankDashGrid