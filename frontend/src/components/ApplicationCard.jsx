import React from 'react';

const ApplicationCard = ({ application }) => {
  if (!application) {
    return <div>No application data</div>;
  }

  const { 
    application_id, 
    Status, 
    auditing_company_name = 'N/A', 
    company_name = 'N/A' 
  } = application;

  return (
    <div className='bg-white p-4 mb-4 shadow-md rounded-md flex justify-between items-center'>
      <div>
        <h3 className='text-xl font-bold mb-2'>Application ID: {application_id || 'N/A'}</h3>
        <p>Auditing Company: {auditing_company_name}</p>
        <p>Company Name: {company_name}</p>
        <p>Documents Shared:</p>
        <ul className='list-disc pl-5'>
          {/* Assuming documents are part of the application data */}
          {application.documents && application.documents.length > 0 ? (
            application.documents.map((doc, index) => (
              <li key={index}>{doc}</li>
            ))
          ) : (
            <li>No documents shared</li>
          )}
        </ul>
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

export default ApplicationCard;
