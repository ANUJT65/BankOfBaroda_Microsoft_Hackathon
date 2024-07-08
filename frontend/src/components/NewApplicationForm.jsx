import React, { useState } from 'react';

const NewLoanApplicationForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [documents, setDocuments] = useState([]);
  const [info, setInfo] = useState('');
  const [attestation, setAttestation] = useState(false);
  const [loanApplication, setLoanApplication] = useState(null);

  const handleDocumentChange = (event) => {
    setDocuments([...documents, ...event.target.files]);
  };

  const handleInfoChange = (event) => {
    setInfo(event.target.value);
  };

  const handleAttestationChange = (event) => {
    setAttestation(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step === 1) {
      // Validate documents and move to next step
      if (documents.length > 0) {
        setStep(2);
      } else {
        alert('Please attach at least one document.');
      }
    } else if (step === 2) {
      // Validate additional information and move to next step
      if (info.trim() !== '') {
        setStep(3);
      } else {
        alert('Please provide additional information.');
      }
    } else if (step === 3) {
      // Validate attestation and submit loan application
      if (attestation) {
        // Simulate submission (in a real application, this would be an API call)
        const application = {
          documents,
          info,
          status: 'Under Review', // Initial status
        };
        setLoanApplication(application);
        setStep(4); // Move to next step after submission
      } else {
        alert('Please sign the attestation.');
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
              <label className='block mb-2 font-bold'>Attach Documents</label>
              <input type='file' multiple onChange={handleDocumentChange} />
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
              <label className='block mb-2 font-bold'>Additional Information</label>
              <textarea
                value={info}
                onChange={handleInfoChange}
                className='w-full p-2 border rounded-md'
                rows='4'
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
                Next
              </button>
            </div>
          </form>
        )}
        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label className='flex items-center'>
                <input
                  type='checkbox'
                  checked={attestation}
                  onChange={handleAttestationChange}
                  className='mr-2'
                />
                Sign Attestation
              </label>
            </div>
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={() => setStep(2)}
                className='mr-4 bg-gray-400 text-white px-4 py-2 rounded-md'
              >
                Back
              </button>
              <button
                type='submit'
                className='bg-[#ff5b2e] text-white px-4 py-2 rounded-md'
              >
                Submit Application
              </button>
            </div>
          </form>
        )}
        {step === 4 && (
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

export default NewLoanApplicationForm;
