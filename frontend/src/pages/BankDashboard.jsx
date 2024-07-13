import React from 'react';
import BankerNavbar from '../components/BankerNavbar';
import Pie from '../components/Pie';
import ApplicationsTable from '../components/ApplicationsTable';

const BankDashboard = () => {
  return (
    <div className='flex flex-col w-full'>
      <BankerNavbar active='Applications'/>
      <div className='italic text-3xl m-5 ml-7'>Customer Applications</div>
      <hr className='border-t border-black mx-4' />
      <div className='flex mt-5'>
        <div className='w-1/3 p-4'><Pie /></div>
        <div className='flex-grow p-4'>
          <ApplicationsTable />
        </div>
      </div>
    </div>
  );
};

export default BankDashboard;
