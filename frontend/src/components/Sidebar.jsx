import React from 'react';

const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen bg-white w-1/6 p-4'>
      <div className='p-4 cursor-pointer hover:bg-black hover:text-white rounded-md'>Applications</div>
      <div className='p-4 cursor-pointer hover:bg-black hover:text-white rounded-md'>Grievances</div>
      <div className='p-4 cursor-pointer hover:bg-black hover:text-white rounded-md'>Accounts</div>
      <div className='p-4 cursor-pointer hover:bg-black hover:text-white rounded-md'>Investments</div>
    </div>
  );
};

export default Sidebar;
