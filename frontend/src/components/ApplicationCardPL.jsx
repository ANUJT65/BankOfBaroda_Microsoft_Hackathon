import React from 'react';

const ApplicationCardPL = ({ application }) => {
  if (!application) {
    return <div>No application data</div>;
  }

  const { 
    Application_id, 
    Status, 
    Name = 'N/A', 
    Occupation = 'N/A',
    Type_of_Loan = 'N/A'
  } = application;

  return (
    <div className='bg-white p-4 mb-4 shadow-md rounded-md flex justify-between items-center'>
      <div>
        <h3 className='text-xl font-bold mb-2'>Application ID: {Application_id || 'N/A'}</h3>
        <p>Name: {Name}</p>
        <p>Occupation: {Occupation}</p>
        <p>Loan Type: {Type_of_Loan || 'Unknown'}</p>
      </div>
      <div
        className={`text-xl font-bold ${
          Status === 'Rejected'
            ? 'text-red-500'
            : Status === 'Approved'
            ? 'text-green-500'
            : 'text-yellow-500'
        }`}
      >
        {Status || 'Unknown'}
      </div>
    </div>
  );
};

export default ApplicationCardPL;
