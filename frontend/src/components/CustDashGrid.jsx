import React, { useContext, useState, useEffect } from 'react';
import ClusteredBarChart from './ClusteredBarChart';
import NewApplicationMenu from './NewApplicationMenu';
import { UserCategoryContext } from '../contexts/UserCategoryContext';
import NewComplaintButton from './NewComplaintButton';
import NewComplaintDialog from './NewComplaintDialog';
import EmailTable from './EmailTable';
import axios from 'axios';
import ApplicationTableforcut from './ApplicationTableforcut';

const CustDashGrid = () => {
  const { userCategory, setUserCategory } = useContext(UserCategoryContext);
  const [complaints, setComplaints] = useState([]);
  const [applications, setApplications] = useState([]);
  const [personalLoans, setPersonalLoans] = useState([]);

  const activeStyle = 'text-left px-4 font-bold py-3 mt-3 bg-black text-white rounded-md';
  const inactiveStyle = 'bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md';

  const ah = ['Application ID', 'Company Name', 'Auditing Company', 'Status'];
  const ch = ['Application ID', 'Category', 'Classification Date', 'Email Content', 'Email ID', 'Reply Message', 'Status', 'User ID'];
  const plh = ['Application ID', 'Name', 'Occupation', 'Status', 'Type of Loan'];

  // Function to fetch complaints data
  const fetchComplaints = async () => {
    try {
      const response = await axios.get('https://bobcyberwardenfinal.azurewebsites.net/emailclassify/email_by_userid');
      setComplaints(response.data);
    } catch (error) {
      console.error('Error fetching complaints data', error);
    }
  };

  // Function to fetch applications data
  const fetchApplications = async () => {
    try {
      const response = await axios.get('https://bobcyberwardenfinal.azurewebsites.net/bussinessloan/loanbyuserid/12735');
      // Extracting only the required fields
      const filteredApplications = response.data.applications.map(app => ({
        application_id: app.application_id,
        company_name: app.company_name,
        auditing_company_name: app.auditing_company_name,
        status: app.Status,
      }));
      setApplications(filteredApplications);
    } catch (error) {
      console.error('Error fetching applications data', error);
    }
  };

  // Function to fetch personal loan data
  const fetchPersonalLoans = async () => {
    try {
      const response = await axios.get('https://bobcyberwardenfinal.azurewebsites.net/personalloan/get_customer_info?Customer_ID=3392');
      // Extracting only the required fields and matching the structure
      const filteredPersonalLoans = response.data.map(loan => ({
        application_id: loan.Application_id,
        name: loan.Name,
        occupation: loan.Occupation,
        status: loan.Status,
        type_of_loan: loan.Type_of_Loan,
      }));
      setPersonalLoans(filteredPersonalLoans);
    } catch (error) {
      console.error('Error fetching personal loan data', error);
    }
  };

  useEffect(() => {
    fetchComplaints();
    fetchApplications();
    fetchPersonalLoans(); // Fetch personal loans as well
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
          Business Loans
        </button>
        <button className={`${userCategory === 'Personal_loans' ? activeStyle : inactiveStyle}`} onClick={() => setUserCategory('Personal_loans')}>
          Personal Loans
        </button>
      </div>

      <div className='bg-white col-span-9 rounded-md flex flex-col p-4'>
        <div className='flex justify-between'>
          <div className='font-bold text-xl'>Your {userCategory}</div>
          {userCategory === 'Applications' || userCategory === 'Personal_loans' ? <NewApplicationMenu /> : <NewComplaintButton />}
        </div>
        <div className='text-[#666666]'>Keep track of your bank {userCategory} here</div>
        {userCategory === 'Applications' && <ApplicationTableforcut header={ah} content={applications} />}
        {userCategory === 'Complaints' && <EmailTable header={ch} content={complaints} />}
        {userCategory === 'Personal_loans' && <ApplicationTableforcut header={plh} content={personalLoans} />} {/* Personal Loans table */}
      </div>
      <NewComplaintDialog />
    </div>
  );
};

export default CustDashGrid;
