import React from 'react';

const BankerNavbar = () => {
  return (
    <div className='bg-[#ff5b2e] shadow-md flex justify-between mt-3 mr-4 ml-4 rounded-full'>
      <div className='flex justify-start'>
        <img src='./logo copy.png' className='h-14 pl-10'></img>
        <div className='text-2xl font-bold text-white pt-3 pl-5'>Bank of Baroda Admin Panel</div>
      </div>
      <div className='flex justify-around'>
        <div className='text-xl font-bold text-white pt-3 mr-4'>Applications</div>
        <div className='text-xl font-bold text-white pt-3 mr-4'>Mails</div>
        <div className='text-xl font-bold text-white pt-3 mr-4'>Data Charts</div>
      </div>
    </div>
  );
};

export default BankerNavbar;
