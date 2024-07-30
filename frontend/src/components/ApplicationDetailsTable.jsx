import React, { useState } from 'react';

const CompanyAnalysisForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('https://bobcyberwardenfinal.azurewebsites.net/company_check/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company_name: companyName }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await res.json();
      setResponse(result);
    } catch (error) {
      setError(error.message);
    }
  };

  const formatResponse = (response) => {
    if (!response) return null;

    const { company_name, loan_approval_risk, news_summary } = response;

    return (
      <div className='mt-4 p-4 border border-gray-200 rounded-md'>
        <h2 className='text-lg font-semibold mb-2'>Analysis Result</h2>
        <div className='mb-4'>
          <h3 className='text-md font-semibold'>Company Name:</h3>
          <p>{company_name}</p>
        </div>
        <div className='mb-4'>
          <h3 className='text-md font-semibold'>Loan Approval Risk:</h3>
          <p>{loan_approval_risk}</p>
        </div>
        <div>
          <h3 className='text-md font-semibold'>News Summary:</h3>
          <pre className='whitespace-pre-wrap break-words'>{news_summary}</pre>
        </div>
      </div>
    );
  };

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div>
          <label htmlFor='companyName' className='block text-sm font-medium text-gray-700'>
            Company Name
          </label>
          <input
            id='companyName'
            type='text'
            value={companyName}
            onChange={handleInputChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
        >
          Analyze
        </button>
      </form>

      {response && formatResponse(response)}

      {error && (
        <div className='mt-4 p-4 border border-red-500 text-red-500 rounded-md'>
          <h2 className='text-lg font-semibold'>Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default CompanyAnalysisForm;
