import React from 'react'
import { TbNotes } from 'react-icons/tb'
import ArticleCard from './Cards/ArticleCard';

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