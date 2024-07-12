import React from 'react';

const ApplicationCard = ({ application }) => {
  return (
    <div className='bg-white p-4 mb-4 shadow-md rounded-md flex justify-between items-center'>
      <div>
        <h3 className='text-xl font-bold mb-2'>Application ID: {application.id}</h3>
        <p>Documents Shared:</p>
        <ul className='list-disc pl-5'>
          {application.documents.map  ((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      </div>
      <div className={`text-xl font-bold ${application.status === 'Rejected' ? 'text-red-500' : application.status === 'Approved' ? 'text-green-500' : 'text-yellow-500'}`}>
        {application.status}
      </div>
    </div>
  );
};

export default ApplicationCard;
