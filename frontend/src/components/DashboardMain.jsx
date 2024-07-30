import React, { useState, useEffect } from 'react';
import ApplicationCard from './ApplicationCard';
import NewApplicationForm from './NewApplicationForm';
import { useNavigate } from 'react-router-dom';

const DashboardMain = () => {
  const navigate = useNavigate();

  const [applications, setApplications] = useState([]);
  const [showNewApplicationForm, setShowNewApplicationForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('https://bobcyberwardenfinal.azurewebsites.net/bussinessloan/user_to_data?user_id=1349');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApplications(data); // Set the entire array of applications
        console.log('Fetched Applications:', data); // Log the fetched data
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleNewApplicationClick = () => {
    setShowNewApplicationForm(true);
  };

  const handleCloseForm = () => {
    setShowNewApplicationForm(false);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='w-full p-4'>
      <div className='flex justify-start mb-4'>
        <button
          className='bg-[#ff5b2e] text-white px-5 py-2 rounded-md font-bold'
          onClick={handleNewApplicationClick}
        >
          New Application
        </button>
        <button
          className='bg-[#ff5b2e] text-white px-5 py-2 mx-4 rounded-md font-bold'
          onClick={() => navigate('/dashboard')}
        >
          New Personal Loan Application
        </button>
        <button
          className='bg-[#ff5b2e] text-white px-5 py-2 mx-4 rounded-md font-bold'
          onClick={() => navigate('/dashboard')}
        >
          New Business Loan Application
        </button>
      </div>
      <h2 className='text-2xl font-bold mb-4'>Your Applications</h2>
      <div>
        {applications.length > 0 ? (
          applications.map((application) => (
            <ApplicationCard key={application.application_id} application={application} />
          ))
        ) : (
          <div>No applications found</div>
        )}
      </div>
      {showNewApplicationForm && <NewApplicationForm onClose={handleCloseForm} />}
    </div>
  );
};

export default DashboardMain;
