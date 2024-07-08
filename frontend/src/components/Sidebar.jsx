import React from 'react';

const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen bg-orange-100 w-1/6 p-4'>
      <div className='p-4 cursor-pointer hover:bg-orange-200 rounded-md'>Applications</div>
      <div className='p-4 cursor-pointer hover:bg-orange-200 rounded-md'>Grievances</div>
      <div className='p-4 cursor-pointer hover:bg-orange-200 rounded-md'>Accounts</div>
      <div className='p-4 cursor-pointer hover:bg-orange-200 rounded-md'>Investments</div>
    </div>
  );
};

export default Sidebar;
