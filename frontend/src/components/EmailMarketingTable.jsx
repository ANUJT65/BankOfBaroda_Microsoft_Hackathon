import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

      setTextAreas(prevTextAreas => ({
        ...prevTextAreas,
        [customerID]: response.data.email,
      }));

      toast.success(`Email generated for ${customer.Name}`);
    } catch (error) {
      console.error(`Error generating email for ${customer.Name}:`, error);
      toast.error(`Failed to generate email for ${customer.Name}`);
    }
  };

  const handleButtonClick = async (customerID) => {
    const customer = customers.find(c => c.CustomerID === customerID);
    if (!customer) return;

    const emailData = textAreas[customerID];
    console.log(`Preparing to send email for ${customer.Name} (${customer.Email})`);

    const requestBody = {
      subject: "Unlock Your Education Potential with Our Student Loan Solutions",
      body: emailData,
      recipient_email: customer.Email,
    };

    try {
      console.log('Sending Request Body:', requestBody);

      const response = await axios.post('https://bobcyberwardenfinal.azurewebsites.net/ads/send_email', requestBody);

      console.log('Send Response:', response.data);

      if (response.data.status === 'success') {
        console.log(`Email sent successfully to ${customer.Name} (${customer.Email})`);
        toast.success(`Email sent to ${customer.Name}`);
      } else {
        console.log(`Failed to send email to ${customer.Name} (${customer.Email})`);
        toast.error(`Failed to send email to ${customer.Name}`);
      }
    } catch (error) {
      console.error(`Error sending email to ${customer.Name} (${customer.Email}):`, error);
      toast.error(`Error sending email to ${customer.Name}`);
    }
  };

  const handleGenerateAllClick = async () => {
    try {
      for (const customer of customers) {
        await handleGenerateClick(customer.CustomerID);
      }
      toast.success('All emails have been generated successfully!');
    } catch (error) {
      console.error('Error generating all emails:', error);
      toast.error('Failed to generate all emails');
    }
  };

  const handleSendAllClick = async () => {
    try {
      for (const customer of customers) {
        await handleButtonClick(customer.CustomerID);
      }
      toast.success('All emails have been sent successfully!');
    } catch (error) {
      console.error('Error sending all emails:', error);
      toast.error('Failed to send all emails');
    }
  };

  return (
    <>
      <ToastContainer />
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
          </div>
        ))
      )}
      {customers.length > 0 && (
        <div className='flex justify-start space-x-2 mt-4'>
          <button
            onClick={handleSendAllClick}
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            Send All
          </button>
          <button
            onClick={handleGenerateAllClick}
            className='bg-green-500 text-white px-4 py-2 rounded'
          >
            Generate All
          </button>
        </div>
      )}
    </>
  );
};

export default EmailMarketingTable;
