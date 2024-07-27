import React, { useContext, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { UserContext } from '../contexts/userContext';

const BankNavbar2 = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    setUser({ name: 'John Doe', designation: 'Bank Guy' });
  }, [setUser]);

  return (
    <div className='bg-[#ff5b2e]  flex justify-between py-2'>
      <div className='flex justify-start'>
        <img src='./logo copy.png' alt='Logo' className='h-14 pl-10' />
        <div className='text-2xl font-bold italic text-white pt-2 pl-2'>
          Walter White
        </div>
      </div>
      <div className='flex'>
        <Avatar sx={{ bgcolor: '#000000' }} className='mt-2 mr-2 bg-black'>
          {user?.name?.[0]}
        </Avatar>
        <div className='flex flex-col pr-4'>
          <div className='font-bold'>{user?.name}</div>
          <div className='text-white'>{user?.designation}</div>
        </div>
      </div>
    </div>
  );
};

export default BankNavbar2;
