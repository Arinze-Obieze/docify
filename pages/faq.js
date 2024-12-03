import Layout from '@/components/layout';
import React from 'react';
import { PiCurrencyDollarLight } from "react-icons/pi";
function FaqCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col shadow-lg rounded-md border-2 mx-4 px-2 py-4 space-y-4 border-gray-100">
      <div className="border-2 border-gray-100 w-fit px-2 py-1">
        {Icon}
      </div>
      <h2 className="text-[18px] font-bold">{title}</h2>
      <p className="text-gray-600 leading-7">{description}</p>
    </div>
  );
}

function Faq() {
  // Sample FAQ data
  const faqData = [
    {
      icon: <PiCurrencyDollarLight className="text-xl" />,
      title: 'Is there a cost to use the app?',
      description: `Yes, our app offers both free and paid versions. The free version includes basic features, while the paid version includes additional features and benefits. You can choose the plan that best suits your needs.`,
    },
    {
        icon: <PiCurrencyDollarLight className="text-xl" />,
        title: 'How secure is my data?',
      description: `Yes, our app offers both free and paid versions. The free version includes basic features, while the paid version includes additional features and benefits. You can choose the plan that best suits your needs.`,
    },
  ];

  return (
    <Layout herotext={'Frequently Asked Questions!'}>
      <div className="mt-12 md:mt-22 mb-8 md:mb-16 space-y-6 md:gap-2 md:grid md:grid-cols-2 place-items-center">
        {faqData.map((faq, index) => (
          <FaqCard
            key={index}
            icon={faq.icon}
            title={faq.title}
            description={faq.description}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Faq;
