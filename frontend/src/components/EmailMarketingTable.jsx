import React, { useState } from 'react';
import axios from 'axios';

const EmailMarketingTable = ({ customers }) => {
  const [textAreas, setTextAreas] = useState(
    customers.reduce((acc, customer) => {
      acc[customer.CustomerID] = '';
      return acc;
    }, {})
  );

  const handleTextAreaChange = (customerID, event) => {
    setTextAreas({
      ...textAreas,
      [customerID]: event.target.value,
    });
  };

  const handleGenerateClick = async (customerID) => {
    const customer = customers.find(c => c.CustomerID === customerID);
    if (!customer) return;

    const requestBody = {
      scheme_name: "Student Loan",
      customer_name: customer.Name,
    };

    try {
      console.log('Request Body:', requestBody);

      const response = await axios.post('https://bobcyberwardenfinal.azurewebsites.net/ads/generate_email', requestBody);

      console.log('Response:', response.data);

      setTextAreas({
        ...textAreas,
        [customerID]: response.data.email,
      });
    } catch (error) {
      console.error('Error generating email:', error);
    }
  };

  const handleButtonClick = async (customerID) => {
    const customer = customers.find(c => c.CustomerID === customerID);
    if (!customer) return;

    const requestBody = {
      subject: ` `,
      body: textAreas[customerID],
      recipient_email: customer.Email,
    };

    try {
      console.log('Sending Request Body:', requestBody);

      const response = await axios.post('https://bobcyberwardenfinal.azurewebsites.net/ads/send_email', requestBody);

      console.log('Send Response:', response.data);

      if (response.data.status === 'success') {
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('An error occurred while sending the email.');
    }
  };

  return (
    <>
      <div className='text-3xl mt-4 mb-2'>Eligible Customers</div>
      {customers.length === 0 ? (
        <div className='text-center mt-4'>No eligible customers found.</div>
      ) : (
        customers.map((customer) => (
          <div
            key={customer.CustomerID}
            className='bg-white py-2 px-3 border border-gray-400 flex flex-col mb-2'
          >
            <div className='flex justify-start mb-2'>
              <div className='mx-2 font-bold'>{customer.Name}</div>
              <div className='mx-2'>{customer.Email}</div>
            </div>
            <textarea
              value={textAreas[customer.CustomerID]}
              onChange={(event) => handleTextAreaChange(customer.CustomerID, event)}
              className='border border-gray-300 p-10 mb-2'
              placeholder='Type your message here...'
            />
            <div className='flex space-x-2'>
              <button
                onClick={() => handleButtonClick(customer.CustomerID)}
                className='bg-blue-500 text-white px-4 py-2 rounded'
              >
                Send
              </button>
              <button
                onClick={() => handleGenerateClick(customer.CustomerID)}
                className='bg-green-500 text-white px-4 py-2 rounded'
              >
                Generate
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default EmailMarketingTable;
