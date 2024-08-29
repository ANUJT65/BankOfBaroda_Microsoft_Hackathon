import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import EmailMarketingSidebar from '../components/EmailMarketingSidebar';
import EmailMarketingTable from '../components/EmailMarketingTable';

const EmailMarketing = () => {
  const [schemeName, setSchemeName] = useState('');
  const [emailDraft, setEmailDraft] = useState('');
  const [eligibleCustomers, setEligibleCustomers] = useState([]);

  const handleGenerateCampaign = async () => {
    try {
      const response = await axios.post('https://bobcyberwardenfinal.azurewebsites.net/ads/eligible_customers', {
        "scheme_name": schemeName,
      });
      console.log(schemeName);
      console.log(response.data);
      setEligibleCustomers(response.data); // Store the response data in the state
    } catch (error) {
      console.error('Error fetching eligible customers:', error);
    }
  };

  return (
    <div className='flex flex-col bg-gray-200'>
      <Navbar />

      <div className='grid grid-cols-9 h-screen'>
        <EmailMarketingSidebar />

        <div className='col-span-7 bg-gray-200'>
          <div className='p-4 flex flex-col'>
            <div className='flex justify-around'>
              <input
                className='w-full border border-gray-400 p-2'
                placeholder='Enter scheme name'
                value={schemeName}
                onChange={(e) => setSchemeName(e.target.value)}
              />
              <button
                className='bg-black text-white px-3 w-1/4'
                onClick={handleGenerateCampaign}
              >
                Generate Campaign
              </button>
            </div>
            <EmailMarketingTable customers={eligibleCustomers} />

            <div className='text-3xl mt-4'>Email Draft</div>
            <textarea
              className='my-4 p-4 border border-gray-400'
              value={emailDraft}
              onChange={(e) => setEmailDraft(e.target.value)}
            ></textarea>

            {/* Pass the eligibleCustomers data as a prop to EmailMarketingTable */}

            <button className='w-full py-2 px-4 bg-[#FF5B2E] mt-10 text-xl font-bold hover:bg-black hover:text-white'>
              Launch Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailMarketing;
