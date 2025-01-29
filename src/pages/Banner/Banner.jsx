import React from 'react';
import banner from '../../assets/banner3.jpg'

const Banner = () => {
    return (
        <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1 className=" text-center pt-10 text-7xl font-bold text-white">Welcome to NestLease</h1>
      <p className='text-2xl text-white font-semibold text-center pt-2'>Your ultimate destination for seamless and stress-free home rentals!</p>
    </div>
    );
};

export default Banner;