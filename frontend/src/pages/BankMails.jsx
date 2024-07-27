import React, { useState } from 'react';
import BankerNavbar from '../components/BankerNavbar';
import EmailsTable from '../components/EmailsTable';

const BankMails = () => {
  const [category, setCategory] = useState('');

  const onCategorySelect = async (category) => {
    setCategory(category);
    try {
      const response = await fetch(`http://127.0.0.1:5000/mails?category=${encodeURIComponent(category)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Handle the data if needed
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className='flex flex-col w-full'>
      <BankerNavbar active='Mail'/>
      <div className='italic text-3xl m-5 ml-7'>ML Categorised Mails</div>
      <hr className='border-t border-black mx-4' />
      <div className='flex mt-5'>
        <div className='w-1/5'>
          <div className='flex flex-col mx-4'>
            <div className='my-3 font-bold'>Categories</div>
            <button
              className='my-2 bg-gray-200 text-black font-bold p-2 rounded hover:bg-gray-300 w-1/2'
              onClick={() => onCategorySelect('get_loans_and_mortgages')}
            >
              Loans and Mortgages
            </button>
            <button
              className='my-2 bg-gray-200 text-black font-bold p-2 rounded hover:bg-gray-300 w-1/2'
              onClick={() => onCategorySelect('get_deposits_and_withdrawals')}
            >
              Deposits and Withdrawals
            </button>
            <button
              className='my-2 bg-gray-200 text-black font-bold p-2 rounded hover:bg-gray-300 w-1/2'
              onClick={() => onCategorySelect('get_fraud_and_security')}
            >
              Fraud and Security
            </button>
            <button
              className='my-2 bg-gray-200 text-black font-bold p-2 rounded hover:bg-gray-300 w-1/2'
              onClick={() => onCategorySelect('get_customer_service')}
            >
              Customer Service
            </button>
          </div>
        </div>
        <div className='flex-grow p-4'>
          <EmailsTable category={category} />
        </div>
      </div>
    </div>
  );
};

export default BankMails;
