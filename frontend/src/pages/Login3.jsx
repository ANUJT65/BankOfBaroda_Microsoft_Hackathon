import React from 'react';
import backgroundImage from '../../public/bg-3.png';
import logo from '../../public/logo copy.png?url';

const Login3 = () => {
  return (
    <div className='flex'>
      <div className='bg-[#FF5B2E] w-full h-screen flex flex-col justify-center items-center p-40'>
        <div 
          className='h-10 w-14 ' 
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className='text-3xl text-center font-bold text-white mb-2'>Welcome Back</div>
        <div className='text-center text-white mb-6'>Please Enter your details</div>

        <div className='w-full'>
          <div className='mb-2 text-left text-white'>Account no:</div>
          <input className='bg-[#666666] w-full h-10 mb-4 pl-2 text-white' />

          <div className='mb-2 text-left text-white'>Password</div>
          <input className='bg-[#666666] w-full h-10 mb-4 pl-2 text-white' />
          
          <button className='bg-black w-full text-white font-bold h-10 mt-6 py-2 rounded'>Login</button>
        </div>
      </div>
      <div 
        className='w-full h-screen' 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </div>
  );
}

export default Login3;
