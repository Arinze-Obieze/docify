import React, { useEffect, useState } from 'react';
import { AiFillBank } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { IoCloseSharp } from "react-icons/io5"; // Import the close icon
import { CiDark } from "react-icons/ci";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
import { FiSun } from "react-icons/fi"; 

function Header() {
  const [ismenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode,setIsDarkMode] =useState(false)
  
 // Toggle theme and save preference
 const toggleTheme = () => {
  const newTheme = !isDarkMode;
  setIsDarkMode(newTheme);
  document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  localStorage.setItem('theme', newTheme ? 'dark' : 'light');
};

  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  
  const toggleIsMenuOpen = () => {
    setIsMenuOpen(!ismenuOpen);
  };

  const router = useRouter();
  // console.log('Menu state:', ismenuOpen);

  const isActive = (path) => router.pathname === path;

  return (
    <>
      <div className={`${isActive('/doc/docs') ||  isActive('/collaborating')
        ? 'bg-icon  py-4 px-8' : 'py-4 px-8'}`}>

      <div className='w-full border-[1px] border-border rounded-xl px-2 py-2 bg-primaryBg text-black'>
          <div className='flex justify-between px-4'>
            <div className='flex text-primaryText place-items-center space-x-4 font-[500]'>
              <div className='shadow-xl  border-[1px] border-border rounded-md px-2 py-1'>
                <Link href={'/'}>
                  <AiFillBank className='text-4xl text-primaryText' />
                </Link>
              </div>

              <Link
                href={'contact'}
                className={`max-md:hidden hover:text-[#4837dc] ${
                  isActive('/contact') ? 'underline t text-[#4837dc]' : ''
                }`}
              >
                Contact Support
              </Link>
              <Link
                href={'/faq'}
                className={`max-md:hidden  hover:text-[#4837dc] ${
                  isActive('/faq') ? 'underline text-[#4837dc]' : ''
                }`}
              >
                FAQs
              </Link>
              <div className='max-md:hidden border-[1px] h-4 border-gray-200'></div>
              <Link
                href={'/all-collections'}
                className={`max-md:hidden hover:text-[#4837dc] ${
                  isActive('/all-collections') ? 'underline text-[#4837dc]' : ''
                }`}
              >
                Browse All Articles
              </Link>
            </div>

            <div className='text-2xl place-items-center space-x-4 flex'>
              {/* Search Bar */}
              <div className="flex max-w-[600px] w-full bg-secondaryBg rounded-xl overflow-hidden">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search Our Knowledge Base..."
                    className="w-full border-2 max-md:hidden border-gray-100 bg-secondaryBg shadow-xl text-sm py-3 px-2 text-black rounded-l-xl pl-10 focus:outline-none"
                  />
                  <FiSearch className="absolute font-[700] text-[#4838a1] left-4 top-1/2 transform -translate-y-1/2 text-sm" />
                </div>
              </div>

          {/* Theme Toggle */}
          <div className='shadow-lg rounded-md border-[1px] border-border py-1 px-2 cursor-pointer' 
             onClick={toggleTheme}>

                {isDarkMode ? <FiSun className='text-yellow-500' /> 

                : <CiDark className='text-gray-600' />}
              </div>

              <div className='relative text-primaryBg z-50 rounded-md  py- px-2 cursor-pointer'>
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                    ismenuOpen ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                >
                  <TbMenu onClick={toggleIsMenuOpen} className="text-gray-500" />
                </div>
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
                    ismenuOpen ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
                  }`}
                >
                  <IoCloseSharp onClick={toggleIsMenuOpen} className="text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`
          ${ismenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
          bg-primaryBg text-primaryText  h-fit absolute inset-0 flex flex-col 
          justify-center mt-12 items-center mx-8 space-y-4 py-4 w-3/3
          rounded-lg shadow-lg shadow-gray-600 transition-all duration-500 ease-in-out
        `}
      >
        <Link
          href={'/contact'}
          className={` hover:text-[#4837dc] ${
            isActive('/') ? 'underline text-[#4837dc]' : ''
          }`}
        >
          Contact Support
        </Link>
        <Link
          href={'/faq'}
          className={`hover:text-[#4837dc] ${
            isActive('/faq') ? 'underline text-[#4837dc]' : ''
          }`}
        >
          FAQs
        </Link>
        <Link
          href={'/all-collections'}
          className={`hover:text-[#4837dc] ${
            isActive('/all-collections') ? 'underline text-[#4837dc]' : ''
          }`}
        >
          Browse All Articles
        </Link>
      </div>
    </>
  );
}

export default Header;