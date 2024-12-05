import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import { TbNotes } from 'react-icons/tb';

function Docs() {
  return (
<>
<Header/>

<div className=' pt-4 flex'>

<div className='bg-white shadow-lg border-t-2 border-gray-100 mx-4 md:mx-12 mt-12 p-6 mb-12'>

<div className='pt-10'>
<div>
<div className='bg-gray-100 px-4 py-1 w-fit ml-8'>
<h2 className='text-[11px] font-[700px] text-gray-600'>Getting Started</h2>
</div>
<h1 className='text-[25px] font-[600] pt-4'>Creating an Account</h1>
<p className='text-[13px] text-gray-500 pt-2'>Irure aute non cillum commodo magna aliquip 
    est consequat ipsum nulla. Est consequat 
    ipsum nulla.
    </p>
</div>

<div className='text-[13px] pb-8 border-b-2 border-gray-100 text-gray-600 pt-6 space-y-2'>
    <div className='flex place-items-center space-x-2'>
    <RxPerson className='text-lg'/>
        <p>Written By: Mark Brown</p>
    </div>
    <div className='flex place-items-center space-x-2'>
    <CiCalendar className='text-lg'/>
        <p>Last Updated on June 19, 2023</p>
    </div>
</div>

<div className='mt-8'>
    <p className='text-[14px] leading-7 text-gray-600 font-[400]'>
    Creating an account is the first step to using 
    our todo list app. A user account allows you 
    to save your tasks, projects, and settings, 
    and access them from any device. To create an
     account, simply follow these steps:
    </p>

<div className='mt-8'>
    <h2 className='text-[17px] font-[800]'>Sign Up</h2>
    <p className='text-[14px] leading-7 pt-2 text-gray-600 font-[400]'>
    When you visit our website, you will see a 
    "Sign Up" button. Click on it to begin the 
    account creation process. You will be 
    directed to a page where you will be 
    prompted to enter your email address and 
    choose a password. Choose a strong password 
    that is at least 8 characters long and 
    includes a mix of letters, numbers, and 
    symbols. Make sure to choose a password that 
    is easy for you to remember but difficult for 
    others to guess.
    </p>
</div>

<div className='mt-8'>
    <h2 className='text-[17px] font-[800]'>Verify Your Email</h2>
    <p className='text-[14px] pt-2 leading-7 text-gray-600 font-[400]'>
    Once you have entered your email and password,
     click on the "Sign Up" button to proceed. 
     You will then receive an email from us with 
     a verification link. Click on the link to 
     verify your email address. This step ensures 
     that the email address you provided is valid 
     and belongs to you.
    </p>
</div>

<div className='mt-8'>
    <h2 className='text-[17px] font-[800]'>Log In</h2>
    <p className='text-[14px] pt-2 leading-7 text-gray-600 font-[400]'>
    Once you've verified your email, you can log in to the app and start using it. You can access your account from any device by logging in with your email address and password.

 If you're having trouble creating an account, please contact our support team for assistance. We're always happy to help!
    </p>
</div>
</div>

</div>



{/* navigation  */}

<div className='mt-12 space-y-8 md:grid md:grid-cols-2 md:gap-6'>

<div className='bg-gray-100 mx- px-6 py-6 rounded-md space-y-2'>
<div className='flex place-items-center space-x-2'>
<MdArrowBack />
<p className='text-[11px] text-gray-700 font-[500]'
>Previous</p>
</div>
<p className='text-[13px] font-[600]'>Creating an Account</p>
</div>

<div className='bg-gray-100  flex flex-col items-end   mx- px-6 py-6 rounded-md space-y-2'>
<div className='flex place-items-center space-x-2'>

<p className='text-[11px] text-gray-700 font-[500]'>
Next
</p>
<MdArrowForward />
</div>

<p className='text-[13px] font-[600]'>Creating Your First Task</p>

</div>

</div>

</div>


<div className='bg-white shadow-lg border-t-2 pb-24 border-gray-100  py-6 px-6 sticky mt-12 mx-8 w-[900px] h-fit max-md:hidden'>
<h2 className='text-[16px] mt-4 font-[700]'> Related to Getting Started</h2>

<div className=' mt-8 space-y-4'>
          <div className="flex place-items-center space-x-1">
                <TbNotes className="text-xl  text-gray-500" />
                <h3 className="opacity-[1] text-[13px] hover:text-gray-950 font-[500] text-gray-600">Syncing Across Devices</h3>
              </div>

              <div className="flex place-items-center space-x-1">
                <TbNotes className="text-xl  text-gray-500" />
                <h3 className="opacity-[1] text-[13px] hover:text-gray-950 font-[500] text-gray-600">Syncing Across Devices</h3>
              </div>
              <div className="flex place-items-center space-x-1">
                <TbNotes className="text-xl  text-gray-500" />
                <h3 className="opacity-[1] text-[13px] hover:text-gray-950 font-[500] text-gray-600">Syncing Across Devices</h3>
              </div>
              <div className="flex place-items-center space-x-1">
                <TbNotes className="text-xl  text-gray-500" />
                <h3 className="opacity-[1] text-[13px] hover:text-gray-950 font-[500] text-gray-600">Syncing Across Devices</h3>
              </div>
              <div className="flex place-items-center space-x-1">
                <TbNotes className="text-xl  text-gray-500" />
                <h3 className="opacity-[1] text-[13px] hover:text-gray-950 font-[500] text-gray-600">Syncing Across Devices</h3>
              </div>
</div>


</div>


</div>




<Footer/>
</>
  )
}

export default Docs