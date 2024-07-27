import React, { useState, useNavigate } from 'react';
import ApplicationCard from './ApplicationCard';
import NewApplicationForm from './NewApplicationForm';

const applications = [
  {
    id: 'APP123',
    status: 'Under Review',
    documents: ['Document 1', 'Document 2'],
  },
  {
    id: 'APP124',
    status: 'Approved',
    documents: ['Document 1', 'Document 2', 'Document 3'],
  },
  {
    id: 'APP125',
    status: 'Rejected',
    documents: ['Document 1'],
  },
];

const DashboardMain = () => {
  const [showNewApplicationForm, setShowNewApplicationForm] = useState(false);

  const handleNewApplicationClick = () => {
    setShowNewApplicationForm(true);
  };

  const handleCloseForm = () => {
    setShowNewApplicationForm(false);
  };

  return (
    <div className='w-full p-4'>
      <div className='flex justify-start mb-4'>
        <button
          className='bg-[#ff5b2e] text-white px-5 py-2 rounded-md font-bold'
          onClick={handleNewApplicationClick}
        >
          New Application
        </button>
        <button
          className='bg-[#ff5b2e] text-white px-5 py-2 mx-4 rounded-md font-bold'
          onClick={handleNewApplicationClick}
        >
          New Personal Loan Application
        </button>
        <button
          className='bg-[#ff5b2e] text-white px-5 py-2 mx-4 rounded-md font-bold'
        >
          New Business Loan Application
        </button>
      </div>
      <h2 className='text-2xl font-bold mb-4'>Your Applications</h2>
      <div>
        {applications.map((application, index) => (
          <ApplicationCard key={index} application={application} />
        ))}
      </div>
      {showNewApplicationForm && <NewApplicationForm onClose={handleCloseForm} />}
    </div>
  );
};

export default DashboardMain;
