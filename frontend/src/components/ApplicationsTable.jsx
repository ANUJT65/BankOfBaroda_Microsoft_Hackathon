import React from 'react';
import TableEntry from './TableEntry';

const ApplicationsTable = () => {
  const entries=[
    {
      tag: '1',
      type: 'Business Loan (10cr INR)',
      applicant: 'Tata Industries',
      ml_score: 'Safe'
    },
    {
      tag: '2',
      type: 'New Fixed Deposit',
      applicant: 'Ravindra Jadeja',
      ml_score: 'Review Needed'
    },
    {
      tag: '3',
      type: 'Business Credit Card (Qty: 10)',
      applicant: 'Balaji Wafers Pvt Ltd',
      ml_score: 'Safe'
    },
    {
      tag: '1',
      type: 'New Current A/C',
      applicant: 'Smriti Mandanna',
      ml_score: 'Unsafe'
    },
    {
      tag: '2',
      type: 'Business Loan (75 Lakh INR)',
      applicant: 'Virat Kohli',
      ml_score: 'Unsafe'
    },
    {
      tag: '2',
      type: 'Account Transfer (Branch: Kothrud)',
      applicant: 'Lebron James',
      ml_score: 'Review Needed'
    },
    {
      tag: '1',
      type: 'Fixed Deposit Closure',
      applicant: 'Aishwarya Ray',
      ml_score: 'Safe'
    },
    {
      tag: '2',
      type: 'New Current A/C',
      applicant: 'Mary Kom',
      ml_score: 'Safe'
    },
    {
      tag: '1',
      type: 'Business Loan (10cr INR)',
      applicant: 'Tata Industries',
      ml_score: 'Safe'
    },
    {
      tag: '3',
      type: 'Car Loan (1Cr INR)',
      applicant: 'Muhammed Shami',
      ml_score: 'Unsafe'
    }
  ]


  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="text-left px-4 py-2">Tag</th>
          <th className="text-left px-4 py-2">Type</th>
          <th className="text-left px-4 py-2">Name of Applicant</th>
          <th className="text-left px-4 py-2">Azure ML Score</th>
        </tr>
      </thead>
      <tbody className=''>
        {entries.map((entry, index)=>(
          <TableEntry tag={entry.tag} type={entry.type} applicant={entry.applicant} ml_score={entry.ml_score} />
        ))}
      </tbody>
    </table>
  );
}

export default ApplicationsTable;
