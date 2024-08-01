import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import backgroundImage from '../../public/Baroda_Lvp.jpg'; 

const Home = () => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
