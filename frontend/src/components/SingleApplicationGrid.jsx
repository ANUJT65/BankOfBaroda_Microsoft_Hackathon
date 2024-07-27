import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ApplicationDetailsTable from './ApplicationDetailsTable';
import DataChat from './DataChat';

const SingleApplicationGrid = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (path) => () => {
    navigate(path); // Navigate to the specified path
  };

  const details = [
    { "Name": "Virat Kohli" },
    { "Assets": "10 Cr" },
    { "Credit Score": "123" },
  ];

  const reputation = [
    { "Moj Masti": "Positive" },
  ];

  return (
    <div className='grid grid-cols-8 gap-3 mx-10 mt-2 h-full'>
      <div className='col-span-2 bg-white flex flex-col p-5'>
        <div className='font-bold text-xl'>Quick Links</div>
        <div className='text-[#666666]'>Navigate between your actions</div>
        <button 
          onClick={handleNavigation('/bankmails')} 
          className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'
        >
          AzureML Classified Emails
        </button>
        <button 
          onClick={handleNavigation('/dashboard')} // Add path for Dashboard
          className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'
        >
          Dashboard
        </button>

        <div className='mt-10'>
          <div className='font-bold text-xl'>Reputation Check</div>
          <div className='text-[#666666]'>See what others are saying about your applicant</div>
          <ApplicationDetailsTable details={reputation} />
        </div>
      </div>

      <div className='col-span-3 flex flex-col'>
        <div className='bg-white mb-2 flex flex-col p-5'>
          <div className='font-bold text-xl'>Application Overview</div>
          <div className='text-3xl mt-2 mb-4'>Personal Loan Application</div>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <div className='text-[#666666]'>Account no: 12345678</div>
              <div className='text-[#666666]'>3d ago</div>
            </div>
            <div className='bg-[#E3DA00] p-3 font-bold rounded'>Status: Under Review</div>
          </div>
        </div>

        <div className='bg-white mt-2 flex flex-col p-5'>
          <div className='font-bold text-xl'>Application</div>
          <div className='mt-10 bg-gradient-to-r from-[#008000] to-[#49A402] rounded flex flex-col p-5'>
            <div className='text-white text-sm'>Azure ML Prediction</div>
            <div className='text-white text-4xl font-bold'>Safe</div>
          </div>
          <div className='mt-5 flex flex-col'>
            <div>Attached Documents</div>
            <div className='flex justify-start'>
              <div className='border border-black px-4 py-1 mr-2'>balance_sheet.xlsx</div>
              <div className='border border-black px-4 py-1'>balance_sheet.xlsx</div>
            </div>
          </div>
        </div>

        <div className='bg-white mt-2 flex justify-between mb-3'>
          <button className='border border-black w-full mr-2 text-center py-2 rounded hover:bg-[#FF0000]
            hover:text-white hover:font-bold hover:border-[#FF0000]'>Reject</button>
          <button className='border border-black w-full ml-2 text-center py-2 rounded bg-black text-white hover:bg-[#008000] hover:font-bold'>Approve</button>
        </div>
      </div>

      <DataChat />
    </div>
  );
}

export default SingleApplicationGrid;
