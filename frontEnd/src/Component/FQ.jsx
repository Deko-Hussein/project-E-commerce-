import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';

const FAQs = () => {
  // FAQ Data
  const faqData = [
    {
      question: 'How do I track my order?',
      answer: 'To track your order, log in to your account, navigate to the "Orders" section, and click "Track Order" next to the relevant purchase.',
    },
    {
      question: 'What is the return policy?',
      answer: 'You can return items within 30 days of delivery. Please ensure the items are in their original condition and packaging.',
    },
    {
      question: 'Do you ship internationally?',
      answer: 'Yes, we offer international shipping to a variety of countries. Shipping costs and times vary based on location.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'You can contact our customer support team via email at support@example.com or call us at +1 234 567 890.',
    },
  ];

  // Track the open question
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleFAQ = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(index);
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">Help & FAQs</h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center bg-blue-500 text-white py-3 px-4 rounded-lg"
            >
              <span>{faq.question}</span>
              <span>{openQuestion === index ? '-' : '+'}</span>
            </button>
            {openQuestion === index && (
              <div className="mt-2 p-4 bg-blue-50 text-blue-900 rounded-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQs;
