import Header from '@/components/Header';
import React from 'react';
import { RxPerson } from 'react-icons/rx';
import ArticleCard from '@/components/Cards/ArticleCard';

function Collaboration() {
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

  const relatedTopics = [
    "Syncing Across Devices",
    "Managing Notifications",
    "Sharing with Team Members",
    "Using Templates",
    "Customizing Tasks",
  ];

  return (
    <div>
      <Header />
      <div className="bg pt-4 md:flex ">
        {/* Main Content */}
        <div className="flex flex-col mt-12 bg-primaryBg shadow-lg border-t-2 border-gray-100 mx-4 md:mx-12 p-6 mb-12">
          <RxPerson className="text-3xl text-[#4837dc] dark:text-white" />
          <div className="mt-4 space-y-2">
            <h2 className="font-[700] text-[25px]">Collaborating</h2>
            <p className="text-[13px] font-[400] text-secondaryText">
              Collaborate effortlessly with our team app for seamless teamwork.
            </p>
          </div>
          <div className="grid md:grid-cols-1 ">
            {articles.map((article, index) => (
              <ArticleCard key={article.title} title={article.title} description={article.description} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className=" bg-primaryBg shadow-lg border-t-2 pb-24 border-gray-100 py-6 px-6 sticky mt-12 mx-8 w-[400px] h-fit">
          <h2 className="text-[16px] mt-4 font-[700]">Related to Getting Started</h2>
          <div className="mt-8 space-y-4">
            {relatedTopics.map((topic, index) => (
              <div key={index} className="flex place-items-center space-x-1">
                <h3 className="opacity-[1] text-[16px] hover:text-secondaryText cursor-pointer font-[500] text-secondaryText">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;
