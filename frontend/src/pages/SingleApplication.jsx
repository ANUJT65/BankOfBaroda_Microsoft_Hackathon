import React from 'react';
import { useParams } from 'react-router-dom';
import BankNavbar2 from '../components/BankNav2';
import Namaste from '../components/Namaste';
import SingleApplicationGrid from '../components/SingleApplicationGrid';

const SingleApplication = () => {
  const { id } = useParams();

  return (
    <div className='flex flex-col bg-gray-100 h-full'>
      <BankNavbar2 />
      <Namaste />
      <SingleApplicationGrid applicationId={id} />
    </div>
  );
};

export default SingleApplication;
