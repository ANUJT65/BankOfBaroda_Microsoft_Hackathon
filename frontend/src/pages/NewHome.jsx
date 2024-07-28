// src/pages/NewHome.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import homebg from '../../public/Group 67.png';
import HomeNav from '../components/HomeNav';

const NewHome = () => {
  return (
    <div className='flex flex-col bg-white'>
      <HomeNav />
      <div className='bg-cover bg-no-repeat bg-center min-h-screen' style={{ backgroundImage: `url(${homebg}` }}>
      </div>
      <div className='z-50 bg-opacity-50'>how do i put this over the image above?</div>
    </div>
  );
};

export default NewHome;
