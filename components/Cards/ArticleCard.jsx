import React from 'react';
import { TbNotes } from 'react-icons/tb';

const ArticleCard = ({ title, description }) => (
  <div className="mt-8 group hover:bg-icon transition duration-300 ease-in-out shadow-md px-4 py-2 md:mx-8 space-y-2 bg-primarBg">
    <div className="flex place-items-center space-x-1">
      <TbNotes className="text-xl text-gray-500 group-hover:text-white" />
      <h2 className="md:text-[18px] text-secondaryText text-[14px] font-[500] transition duration-300 group-hover:text-white">
        {title}
      </h2>
    </div>
    <p className="md:text-[15px] text-[13px] text-gray-600 transition duration-300 group-hover:text-gray-300">
      {description}
    </p>
  </div>
);

export default ArticleCard;
