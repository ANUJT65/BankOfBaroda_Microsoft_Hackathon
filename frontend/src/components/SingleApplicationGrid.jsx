import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApplicationDetailsTable from './ApplicationDetailsTable';
import DataChat from './DataChat';
import MLScore from './MLScore';

const SingleApplicationGrid = () => {
  const { applicationId } = useParams();
  const navigate = useNavigate();
  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://bobcyberwardenfinal.azurewebsites.net/bussinessloan/get_data_from_applicationid/${applicationId}`)
      .then(response => {
        setApplicationData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [applicationId]);

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  const handleReject = () => {
    axios.post(`https://bobcyberwardenfinal.azurewebsites.net/bussinessloan/set_to_rejected/${applicationId}`)
      .then(response => {
        alert(response.data.message);
        setApplicationData({ ...applicationData, Status: 'rejected' }); // Update the status locally
      })
      .catch(error => {
        alert(`Error: ${error.response.data.error}`);
      });
  };

  const handleAccept = () => {
    axios.post(`https://bobcyberwardenfinal.azurewebsites.net/bussinessloan/set_to_accepted/${applicationId}`)
      .then(response => {
        alert(response.data.message);
        setApplicationData({ ...applicationData, Status: 'accepted' }); // Update the status locally
      })
      .catch(error => {
        alert(`Error: ${error.response.data.error}`);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='grid grid-cols-8 gap-3 mx-10 mt-2 h-full'>
      <div className='col-span-2 bg-white flex flex-col p-5'>
        <div className='font-bold text-xl'>Quick Links</div>
        <div className='text-[#666666]'>Navigate between your actions</div>
        <button 
          onClick={handleNavigation('/bankmails')} 
          className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'
        >
          AzureML Classified Emails 
        </button>
        <button 
          onClick={handleNavigation('/newbankdb')} 
          className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md'
        >
          Dashboard
        </button>
        <button className='bg-gray-200 text-left px-4 font-bold text-black py-3 mt-3 hover:bg-black hover:text-white rounded-md' onClick={() => navigate('/emailmarketing')}>AI Advertisement</button>

        <div className='mt-10'>
          <div className='font-bold text-xl'>Reputation Check</div>
          <div className='text-[#666666]'>See what others are saying about your applicant</div>
          <ApplicationDetailsTable details={applicationData.reputation} />
        </div>
      </div>

      <div className='col-span-3 flex flex-col'>
        <div className='bg-white mb-2 flex flex-col p-5'>
          <div className='font-bold text-xl'>Application Overview</div>
          <div className='text-3xl mt-2 mb-4'>Business Loan</div>
          <div className='flex justify-between'>
            <div className='flex flex-col'>
              <div className='text-[#666666]'>Company : {applicationData.company_name}</div>
              <div className='text-[#666666]'>Audit Agency : {applicationData.auditing_company_name}</div>
              <div className='text-[#666666]'>Application Id  : {applicationData.application_id}</div>
            </div>
            <div className={`p-3 font-bold rounded ${applicationData.Status === 'rejected' ? 'bg-[#FF0000]' : applicationData.Status === 'accepted' ? 'bg-[#008000]' : 'bg-[#E3DA00]'}`}>
              Status: {applicationData.Status}
            </div>
          </div>
        </div>

        <div className='bg-white mt-2 flex flex-col p-5'>
          <div className='font-bold text-xl'>Application</div>
          <MLScore azure_ml_score={applicationData.result} data_of_post_request={applicationData} />
          <div className='mt-5 flex flex-col'>
            <div>Attached Documents</div>
            <div className='flex justify-start'>
              <div className='border border-black px-4 py-1 mr-2'>balance_sheet.xlsx</div>
              <div className='border border-black px-4 py-1'>balance_sheet.xlsx</div>
            </div>
          </div>
        </div>

        <div className='bg-white mt-2 flex justify-between mb-3'>
          <button 
            className='border border-black w-full mr-2 text-center py-2 rounded hover:bg-[#FF0000] hover:text-white hover:font-bold hover:border-[#FF0000]' 
            onClick={handleReject}
          >
            Reject
          </button>
          <button 
            className='border border-black w-full ml-2 text-center py-2 rounded bg-black text-white hover:bg-[#008000] hover:font-bold' 
            onClick={handleAccept}
          >
            Approve
          </button>
          
        </div>
      </div>

      <DataChat />
    </div>
  );
};

export default SingleApplicationGrid;
