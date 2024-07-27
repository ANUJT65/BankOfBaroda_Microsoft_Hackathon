import React from 'react';

const HumanQuery = ({ message }) => {
  return (
    <div className='mb-2 flex justify-end items-center'>
      <div className='bg-gray-100 rounded-lg py-2 px-3 text-left font-semibold text-black'>
        {message}
      </div>
      <div className='bg-black rounded-full p-2 w-10 h-10 flex items-center justify-center font-bold text-white text-s ml-2'>
        J
      </div>
    </div>
  );
};

export default HumanQuery;
