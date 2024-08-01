import React, { useContext, useState } from 'react';
import axios from 'axios';
import { NewApplicationDialogContext } from '../contexts/NewApplicationDialogContext';

const NewComplaintDialog = () => {
  const { show, setShow } = useContext(NewApplicationDialogContext);
  const [email, setEmail] = useState('');
  const [complaintDetails, setComplaintDetails] = useState('');
  const [submitted, setSubmitted] = useState(false); // New state to manage submission status

  if (!show) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      email_id: email,
      email_content: complaintDetails,
      user_id: 1,  // Default user_id
    };

    try {
      const response = await axios.post('https://bobcyberwardenfinal.azurewebsites.net/emailclassify/classify_email', requestBody);

      if (response.status === 200) {
        setSubmitted(true); // Set submission status to true
        setEmail('');
        setComplaintDetails('');
        // Wait for a few seconds before closing the dialog
        setTimeout(() => {
          setShow(false);
          setSubmitted(false); // Reset submission status
        }, 2000);
      } else {
        alert('Error submitting complaint. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-md shadow-md w-1/2">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-lg font-bold mb-4">Complaint Submitted Successfully!</h2>
            <button
              className="bg-[#FF5B2E] hover:bg-black hover:text-white text-white px-4 py-2 rounded-md"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-4">New Complaint</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  className="mt-1 block w-full p-2 border rounded-md"
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Complaint Details</label>
                <textarea
                  className="mt-1 block w-full p-2 border rounded-md"
                  rows="4"
                  value={complaintDetails}
                  onChange={(e) => setComplaintDetails(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded-md mr-2"
                  onClick={() => setShow(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#FF5B2E] hover:bg-black hover:text-white text-white px-4 py-2 rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default NewComplaintDialog;
