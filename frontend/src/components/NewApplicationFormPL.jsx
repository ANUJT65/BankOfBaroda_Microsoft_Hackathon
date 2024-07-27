import React, { useState } from 'react';

const NewLoanApplicationFormPL = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [documentLink, setDocumentLink] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanApplication, setLoanApplication] = useState(null);

  const handleLinkChange = (event) => {
    setDocumentLink(event.target.value);
  };

  const handleLoanTypeChange = (event) => {
    setLoanType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (step === 1) {
      if (documentLink.trim() !== '') {
        setStep(2);
      } else {
        alert('Please provide a document link.');
      }
    } else if (step === 2) {
      if (loanType.trim() !== '') {
        // Construct the data to send
        const applicationData = {
          type_of_loan: loanType,
          link: documentLink,
        };

        try {
          const response = await fetch('http://127.0.0.1:5000/personalloan/ploan', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(applicationData),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();

          // Log the JSON response to the console
          console.log('Response JSON:', result);

          // Update state with application details
          setLoanApplication({
            documentLink,
            loanType,
            status: 'Under Review', // Initial status
            id: result.application_id, // Extract the application ID from the response
          });
          setStep(3); // Move to next step after submission
        } catch (error) {
          console.error('Error submitting application:', error);
          alert('There was a problem submitting your application. Please try again.');
        }
      } else {
        alert('Please provide Loan Type.');
      }
    }
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-50'>
      <div className='bg-white p-6 rounded-md w-1/2'>
        <h2 className='text-2xl font-bold mb-4'>New Loan Application - Step {step}</h2>
        {step === 1 && (
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block mb-2 font-bold'>Enter Document Link</label>
              <input
                type='text'
                value={documentLink}
                onChange={handleLinkChange}
                className='w-full p-2 border rounded-md'
                placeholder='Enter document link'
              />
            </div>
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={onClose}
                className='mr-4 bg-gray-400 text-white px-4 py-2 rounded-md'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='bg-[#ff5b2e] text-white px-4 py-2 rounded-md'
              >
                Next
              </button>
            </div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='block mb-2 font-bold'>Type of Loan</label>
              <input
                type='text'
                value={loanType}
                onChange={handleLoanTypeChange}
                className='w-full p-2 border rounded-md'
                placeholder='Enter loan type'
              />
            </div>
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={() => setStep(1)}
                className='mr-4 bg-gray-400 text-white px-4 py-2 rounded-md'
              >
                Back
              </button>
              <button
                type='submit'
                className='bg-[#ff5b2e] text-white px-4 py-2 rounded-md'
              >
                Submit
              </button>
            </div>
          </form>
        )}
        {step === 3 && (
          <div>
            <h3 className='text-xl font-bold mb-2'>Application Submitted Successfully!</h3>
            <p className='mb-4'>Application ID: {loanApplication && loanApplication.id}</p>
            <p>Status: {loanApplication && loanApplication.status}</p>
            <div className='flex justify-end mt-4'>
              <button
                type='button'
                onClick={onClose}
                className='bg-[#ff5b2e] text-white px-4 py-2 rounded-md'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewLoanApplicationFormPL;
