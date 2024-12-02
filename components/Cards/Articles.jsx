import React from 'react'
import { TbNotes } from 'react-icons/tb'

function Articles() {
    const articles = [
        {
          title: "Collaborating with Others on Tasks",
          description: "Aute deserunt voluptate et qui quis excepteur nostrud exercitation labore eiusmod officia amet.",
        },
        {
          title: "Getting Started with Your First Task",
          description: "Exercitation laboris officia magna nulla et tempor deserunt occaecat enim incididunt.",
        },
        {
          title: "Advanced Keyboard Shortcuts",
          description: "Et ad officia sunt excepteur labore ullamco commodo in sunt labore deserunt voluptate.",
        },
      ];
      const ArticleCard = ({ title, description }) => (
        <div className="mt-8 group hover:bg-[#4831d4] transition duration-300 ease-in-out shadow-md px-4 py-2 mx-8 space-y-2 bg-white">
          <div className="flex place-items-center space-x-1">
            <TbNotes className="text-xl text-gray-500 group-hover:text-white" />
            <h2 className="md:text-[18px] text-gray-600 text-[14px] font-[500] transition duration-300 group-hover:text-white">{title}</h2>
          </div>
          <p className="md:text-[15px] text-[13px] text-gray-600 transition duration-300 group-hover:text-gray-300">{description}</p>
        </div>
      );
  return (
    <div className='bg-gray-100 pb-24'>
        
        <div className='pt-24 text-center'>
            <h1 className="text-[20px] font-[700]"> Recently Added Articles </h1>
  <p className='pt-4 text-[13px] px-6 md:px-8 text-gray-600'>Check Out the Latest and Helpful Articles 
    below! We're always working on making helpful 
    articles to make using our tool much easier.
    </p>
        </div>

<div className='grid md:grid-cols-2'>

{articles.map((article, index) => (
        <ArticleCard key={index} title={article.title} description={article.description} />
      ))}
      
</div>
    </div>
  )
}

export default Articles