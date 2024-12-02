import React from 'react'
import { BsPeople } from "react-icons/bs";
function Help() {
    const helpSections = [
        {
          Icon: <BsPeople className="text-3xl text-[#4831d4]" />,
          title: 'Ask for Help from Community!',
          description: 'Get Help from our awesome Community who\'s there to answer any question and get to know like-minded people.',
        },
        {
          Icon: <BsPeople className="text-3xl text-[#4831d4]" />,
          title: 'Send Us a Direct Message!',
          description: 'If you prefer, you can always send us a message directly, and we will assist you with any issue you have.',
        },
        // Add more sections as needed
      ];
      const HelpSection = ({ Icon, title, description }) => (
        <div className="shadow-md mt-8 px-4 py-2 mx-8 space-y-2 bg-white">
          {Icon}
          <h2 className="md:text-[22px] text-[20px] font-[600] text-gray-700">{title}</h2>
          <p className="md:text-[15px] text-[12px] text-gray-600">{description}</p>
        </div>
      );
  return (
    <div className='bg-gray-100 pb-24'>
        
<div>
    <div className='text-center'>
    <h1 className="text-[20px] font-[700]">Still Got Questions? Don't Worry!</h1>
        <p className='pt-4 text-[13px] px-6
        md:px-8 text-gray-600'>
            Need help, no worries there are multiple 
    ways you can get help from us. You can Join 
    our community or directly Send us a message.</p>
    </div>


 {/* Map through the dynamic data */}
<div className='md:grid-cols-2 grid'>
{helpSections.map((section, index) => (
          <HelpSection
            key={index}
            Icon={section.Icon}
            title={section.title}
            description={section.description}
          />
        ))}
</div>

      </div>
    </div>
  )
}

export default Help