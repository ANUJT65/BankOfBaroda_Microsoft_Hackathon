import React from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';



const Navbar = () => {
  return (
    <>
    <div className='bg-[#ff5b2e] shadow-md flex justify-between py-2'>
      <div className='flex justify-start'>
        <img src='./logo copy.png' className='h-14 pl-10'></img>
        <div className='text-3xl font-bold italic text-white text-italic pt-2 pl-2'>Walter White</div>
      </div>

      <div className='flex justify-center'>
        <div className='px-3 mx-4 pt-3 pb-1 text-white bg-black font-bold'>Applications</div>
        <div className='p-3 mx-4 font-bold'>Mail</div>
        <div className='p-3 mx-4 font-bold'>DataChat</div>

      </div>

      <div className='flex'>
        <Avatar sx={{ bgcolor: '#000000' }} className='mt-2 mr-5 bg-black'>AT</Avatar>
        <div className='flex flex-col pr-4'>
          <div className='font-bold'>Anuj Tadkase</div>
          <div className='text-white'>BOB Gold Member</div>
        </div>
      </div>
        
    </div>
    </>
  )
}


export default Navbar