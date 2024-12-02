import React from 'react'
import { AiFillBank } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";
import { CiDark } from "react-icons/ci";
function Header() {
  return (
    <div className=''>

        <div className='w-full rounded-xl px-2 py-2 bg-white text-black'>

<div className='flex justify-between px-4'>

<div className='flex place-items-center space-x-2 font-[500]'>
<div className='shadow-xl border-2 border-gray-100 rounded-md px-2 py-1'>
<AiFillBank className='text-4xl text-black'/>    
</div>
<h2 className='max-md:hidden'>Contact Support</h2>
<h2 className='max-md:hidden'>FAQs</h2>
<div  className='max-md:hidden border-2 h-4 border-gray-200'></div>
<h2 className='max-md:hidden'>Browse All Articles</h2>
</div>

<div className='text-2xl place-items-center  space-x-4 flex'>
    <div className='border-2 rounded-md border-gray-100 py-1  px-2'>
    <CiDark className='text-gray-600'/>
    </div>
    <div className='border-2 rounded-md border-gray-100 py-1  px-2'>
    <TbMenu className='text-gray-600'/>
    </div>
</div>
</div>


        </div>
    </div>
  )
}

export default Header