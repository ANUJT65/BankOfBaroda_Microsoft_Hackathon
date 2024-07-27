import React from 'react';
import ClusteredBarChart from './ClusteredBarChart';
import NewApplicationMenu from './NewApplicationMenu';

const BankDashGrid = () => {
  return (
    <div className='grid grid-cols-12 gap-3 mx-10 mt-2'>
      <div className='bg-white col-span-4 rounded-md p-3 flex flex-col'>
        <div className='font-bold text-xl'>Savings A/C</div>
        <div className='text-[#666666]'>123456789</div>
        <div className='text-3xl mt-5'>₹ 69,420.00</div>
        <div className='text-[#666666]'>Available Balance</div>
      </div>

      <div className='bg-white col-span-8 rounded-md p-4 flex flex-col'>
        <div className='font-bold text-xl'>Spending Statistics</div>
        <div className='text-[#666666]'>Understand patterns in spending money</div>
        <div>
          <ClusteredBarChart />
        </div>
      </div>

      <div className='bg-white col-span-3 rounded-md flex flex-col p-4'>
        <div className='font-bold text-xl'>Quick Links</div>
        <div className='text-[#666666]'>Navigate between your actions</div>
        <button className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'>
          Complaints
        </button>
        <button className='text-left px-4 font-bold py-3 mt-3 bg-black text-white rounded-md'>
          Applications
        </button>
      </div>

      <div className='bg-white col-span-9 rounded-md flex flex-col p-4'>
        <div className=' flex justify-between'>
            <div className='font-bold text-xl'>Your Applications</div>
            <NewApplicationMenu />
        </div>
        <div className='text-[#666666]'>Keep track of your bank applications here</div>
        <table className='mt-2 table-auto w-full'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-4 py-2 text-left'>Application Type</th>
              <th className='px-4 py-2 text-left'>Application ID</th>
              <th className='px-4 py-2 text-left'>Date</th>
              <th className='px-4 py-2 text-left'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b'>
              <th className='px-4 py-2 text-left font-bold'>Home Loan</th>
              <th className='px-4 py-2 text-left'>12345678</th>
              <th className='px-4 py-2 text-left'>Fri, 26 July 2024</th>
              <th className='px-4 py-2 text-left'>Under Review</th>
            </tr>
            <tr className='border-b'>
              <th className='px-4 py-2 text-left font-bold'>Home Loan</th>
              <th className='px-4 py-2 text-left'>12345678</th>
              <th className='px-4 py-2 text-left'>Fri, 26 July 2024</th>
              <th className='px-4 py-2 text-left'>Under Review</th>
            </tr>
            <tr className='border-b'>
              <th className='px-4 py-2 text-left font-bold'>Home Loan</th>
              <th className='px-4 py-2 text-left'>12345678</th>
              <th className='px-4 py-2 text-left'>Fri, 26 July 2024</th>
              <th className='px-4 py-2 text-left'>Under Review</th>
            </tr>
            <tr className='border-b'>
              <th className='px-4 py-2 text-left'>Home Loan</th>
              <th className='px-4 py-2 text-left'>12345678</th>
              <th className='px-4 py-2 text-left'>Fri, 26 July 2024</th>
              <th className='px-4 py-2 text-left'>Under Review</th>
            </tr>
            <tr className='border-b'>
              <th className='px-4 py-2 text-left font-bold'>Home Loan</th>
              <th className='px-4 py-2 text-left'>12345678</th>
              <th className='px-4 py-2 text-left'>Fri, 26 July 2024</th>
              <th className='px-4 py-2 text-left'>Under Review</th>
            </tr>
            <tr className='border-b'>
              <th className='px-4 py-2 text-left font-bold'>Home Loan</th>
              <th className='px-4 py-2 text-left'>12345678</th>
              <th className='px-4 py-2 text-left'>Fri, 26 July 2024</th>
              <th className='px-4 py-2 text-left'>Under Review</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BankDashGrid;
