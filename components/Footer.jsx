import React from 'react'
import { CiInstagram } from "react-icons/ci";

function Footer() {
  return (
    <div className='bg-gray-100 pt-12 pb-6'>
        
<div>

<div className='flex max-md:flex-col max-md:place-items-center max-md:space-y-8 justify-around'>
<div className='flex max-md:flex-col max-md:space-y-4 font-[600] max-md:text-center text-[15px] md:space-x-4'>

<h4>Contact support</h4>
<h4>FAQs</h4>
<h4>Browse All Help Articles</h4>
</div>

<div className='flex  space-x-2 text-gray-500 text-xl'>
<CiInstagram />
<CiInstagram />
<CiInstagram />

</div>
</div>


<div className='text-gray-500 pt-8 max-md:mt-4 text-[15px] text-center'>
    <h4>© 2024 Docify Template for Framer </h4>
</div>

<div className='flex space-x-4 pt-4 justify-center w-full text-gray-500 text-[12px]'>
    <h4>Terms & Conditions</h4>
    <h4>Privacy Policy</h4>
</div>
</div>


    </div>
  )
}

export default Footer