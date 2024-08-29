import React, { useState } from 'react';
import BankerNavbar from '../components/BankerNavbar';
import EmailsTable from '../components/EmailsTable';
import { useNavigate } from 'react-router-dom';

const BankMails2 = () => {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const onCategorySelect = async (category) => {
    setCategory(category);
    try {
      const response = await fetch(`https://bobcyberwardenfinal.azurewebsites.net/mails?category=${encodeURIComponent(category)}`);
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
    <div className='flex flex-col w-full h-screen bg-[#EFEFEF]'>
      <BankerNavbar active='Mail'/>
      <div className='italic text-3xl m-5 ml-7'>ML Categorised Mails</div>
      <hr className='border-t border-black mx-4' />
      <div className='grid grid-cols-9 gap-2'>
        <div className='col-span-2 bg-white flex flex-col h-full m-3 p-5 rounded'>
            <div className='font-bold text-xl'>Categories</div>
            <div className='font-bold text-[#666666]'>Categories found by our ML model</div>
            <div className='mt-5'>
                <button className='bg-black text-white px-2 py-2 rounded-md w-full mb-2 text-left hover:bg-gray-200 hover:text-black hover:font-bold' onClick={() => onCategorySelect('get_loans_and_mortgages')}>Loans and Mortgages</button>
                <button className='bg-black text-white px-2 py-2 rounded-md w-full mb-2 text-left hover:bg-gray-200 hover:text-black hover:font-bold' onClick={() => onCategorySelect('get_deposits_and_withdrawals')}>Deposits and Withdrawals</button>
                <button className='bg-black text-white px-2 py-2 rounded-md w-full mb-2 text-left hover:bg-gray-200 hover:text-black hover:font-bold' onClick={() => onCategorySelect('get_fraud_and_security')}>Fraud and Security</button>
                <button className='bg-black text-white px-2 py-2 rounded-md w-full mb-2 text-left hover:bg-gray-200 hover:text-black hover:font-bold' onClick={() => onCategorySelect('get_customer_service')}>Customer Service</button>
                <button className='bg-black text-white px-2 py-2 rounded-md w-full mb-2 text-left hover:bg-gray-200 hover:text-black hover:font-bold' onClick={() => navigate('/emails')}>Automated Response</button>
            </div>
        </div>
        <div className='col-span-7 bg-white mt-3 p-5 rounded'>
            <EmailsTable category={category}/>
        </div>
      </div>
    </div>
  );
};

export default BankMails2;
