import React from 'react';
import HomeBackground from '../../public/Group 67.png';
import logo from '../../public/logo copy.png';

const Home2 = () => {
  return (
    <div className="relative">
      <img
        src={HomeBackground}
        alt="Background"
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-start p-4">
        <div className="flex items-center mb-4">
          <img src={logo} alt="Logo" className="w-16 h-16 mr-4" /> {/* Adjust the size as needed */}
          <div className="text-4xl italic font-bold text-white">
            Walter White: Centralized Dashboard for Enhanced Operations, Customer Relationship Management, and Loan Approvals
          </div>
        </div>
        <div className="text-8xl italic font-bold text-white pl-10 pt-10">
          Automation <br /> that works <br /> for everyone.
        </div>
        <button className='flex justify-start mx-10 mt-3 text-2xl p-2 bg-black text-white hover:font-bold w-72 rounded-md'>Customer Dashboard</button>
        <button className='flex justify-start mx-10 mt-3 text-2xl p-2 bg-black text-white hover:font-bold w-72 rounded-md'>Bank Dashboard</button>
      </div>
    </div>
  );
};

export default Home2;
