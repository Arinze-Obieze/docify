import React from 'react';
import { FiSearch } from "react-icons/fi";
import Header from './Header';

function Hero() {
  return (
    <div className="relative ">
      {/* Background image */}
      <img src="/hero.jpg" alt="Hero Image" className="w-full h-[350px] md:h-[300px] object-cover" />

      {/* Overlay Content */}

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white px-4">

<div className='w-full absolute top-8 md:px-24 px-4'>
<Header/>
</div>
       
        {/* Header Text */}
        <h1 className="text-xl font-bold mt-32 mb-12">👋 Hey, Need Any Help?</h1>

        {/* Search Bar */}
        <div className="flex max-w-[600px]  w-full bg-white rounded-xl overflow-hidden">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Our Knowledge Base..."
              className="w-full py-3 px-4 text-black rounded-l-lg pl-10 focus:outline-none"
            />
            <FiSearch className="absolute text-[#4838a1] left-4 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
