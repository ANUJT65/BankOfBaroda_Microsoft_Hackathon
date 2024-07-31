import React, { useContext, useState, useEffect } from 'react';
import ClusteredBarChart from './ClusteredBarChart';
import NewApplicationMenu from './NewApplicationMenu';
import { UserCategoryContext } from '../contexts/UserCategoryContext';
import NewComplaintButton from './NewComplaintButton';
import Table from './Table';
import NewComplaintDialog from './NewComplaintDialog';
import EmailTable from './EmailTable';
import axios from 'axios';
import TableCust from './TableCust';
const CustDashGrid = () => {
  const { userCategory, setUserCategory } = useContext(UserCategoryContext);
  const [complaints, setComplaints] = useState([]);
  
  const activeStyle = 'text-left px-4 font-bold py-3 mt-3 bg-black text-white rounded-md';
  const inactiveStyle = 'bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md';

  const ah = ['Application Type', 'Application ID', 'Date', 'Status'];
  const ch = ['Application ID', 'Category', 'Classification Date', 'Email Content', 'Email ID', 'Reply Message', 'Status', 'User ID'];

  // Function to fetch complaints data
  const fetchComplaints = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/emailclassify/email_by_userid');
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints data', error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className='grid grid-cols-12 gap-3 mx-10 mt-2'>
      <div className='bg-white col-span-4 rounded-md p-5 flex flex-col'>
        <div className='font-bold text-xl'>Savings A/C</div>
        <div className='text-[#666666]'>123456789</div>
        <div className='text-3xl mt-5'>₹ 69,420.00</div>
        <div className='text-[#666666]'>Available Balance</div>
      </div>

      <div className='bg-white col-span-8 rounded-md p-4 flex flex-col'>
        <div className='font-bold text-xl'>Spending Statistics</div>
        <div className='text-[#666666]'>Understand patterns in spending money</div>
        <div>
          <ClusteredBarChart />
        </div>
      </div>

      <div className='bg-white col-span-3 rounded-md flex flex-col p-4'>
        <div className='font-bold text-xl'>Quick Links</div>
        <div className='text-[#666666]'>Navigate between your actions</div>
        <button className={`${userCategory === 'Complaints' ? activeStyle : inactiveStyle}`} onClick={() => setUserCategory('Complaints')}>
          Complaints
        </button>
        <button className={`${userCategory === 'Applications' ? activeStyle : inactiveStyle}`} onClick={() => setUserCategory('Applications')}>
          Applications
        </button>
      </div>

      <div className='bg-white col-span-9 rounded-md flex flex-col p-4'>
        <div className='flex justify-between'>
          <div className='font-bold text-xl'>Your {userCategory}</div>
          {userCategory === 'Applications' ? <NewApplicationMenu /> : <NewComplaintButton />}
        </div>
        <div className='text-[#666666]'>Keep track of your bank {userCategory} here</div>
        {userCategory === 'Applications' && <TableCust header={ah} content={applications} />}
        {userCategory === 'Complaints' && <EmailTable header={ch} content={complaints} />}
      </div>
      <NewComplaintDialog />
    </div>
  );
};

export default CustDashGrid;
