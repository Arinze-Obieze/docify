import React from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { TbNotes } from "react-icons/tb";
import { GrLinkNext } from "react-icons/gr";
import { LuPizza } from "react-icons/lu";

function Collections() {
  const CollectionData = [
    {
        Icon: <IoSettingsOutline className="text-2xl text-blue-600" />,
      title: 'Getting Started',
      texts: [
        "Keyboard Shortcuts and Other Tips",
        "Syncing Across Devices",
        "Customizing Your Task List",
        "Creating Your First Task",
        "Navigating the App",
        "Creating an Account",
      ],
    },
    {
     Icon: <LuPizza className="text-2xl text-blue-600" />,
      title: 'Advanced Features',
      texts: [
        "Integrating with Third-Party Apps",
        "Using API for Automation",
        "Setting Up Advanced Notifications",
        "Managing Teams Effectively",
        "Navigating the App",
        "Creating an Account",
      ],
    },
    // Add more blocks as needed
  ];

  return (
<div>
<h1 className='mt-12 ml-8 font-[700] text-[26px] mb-4'>Browse by Categories</h1>
  
<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:px-8 px-4 pb-12 items-center">
    
      {CollectionData.map((collection, blockIndex) => (
          <div key={blockIndex} className="border-gray-200 rounded-lg border-2 px-4 w-full">
          <div className="pt-8 pb-4 flex place-items-center space-x-2 border-b-2 border-gray-100">
           {collection.Icon} 
            <h1 className="text-[20px] font-[700]">{collection.title}</h1>
          </div>
          <div className="space-y-4 pt-4">
            {collection.texts.map((text, textIndex) => (
              <div key={textIndex} className="flex place-items-center space-x-1">
                <TbNotes className="text-xl  text-gray-500" />
                <h3 className="opacity-[1] text-[14px] hover:text-gray-950 font-[500] text-gray-600">{text}</h3>
              </div>
            ))}
          </div>
          <div className="flex place-items-center space-x-2 text-[#4831d4] border-t-2 border-gray-100 mt-4 pt-2 mb-4">
            <h4 className="text-[14px] opacity-[1] font-[500]">View All Articles</h4>
            <GrLinkNext className="text-[14px]" />
          </div>
        </div>
      ))}

    </div>


    <div className="flex justify-center mt-8 mb-6">
        <button className="bg-[#4831d4] py-2 px-4 flex place-items-center space-x-2 rounded-lg">
          <p className="text-white font-[500] text-[15px]">Browse All Collections</p>
          <GrLinkNext className="text-[14px] text-white" />
        </button>
      </div>
</div>
  );
}

export default Collections;
