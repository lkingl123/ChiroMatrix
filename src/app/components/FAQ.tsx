"use client";

import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What services do you offer for plumbers?",
      answer:
        "We specialize in creating professional websites tailored for plumbing businesses. Our services include website design, development, SEO optimization, and online marketing strategies to help plumbers grow their businesses.",
    },
    {
      question: "How long does it take to create a website?",
      answer:
        "On average, it takes 2-4 weeks to create a fully customized website for your plumbing business, depending on the complexity of your requirements.",
    },
    {
      question: "Can you help with marketing my plumbing business?",
      answer:
        "Absolutely! We provide digital marketing services including local SEO, Google Ads management, and social media marketing to help your plumbing business attract more customers.",
    },
    {
      question: "Do I need to provide content for my website?",
      answer:
        "Not necessarily! We can help create professional, industry-specific content for your website. However, if you have specific images or text you'd like to include, we’re happy to incorporate them.",
    },
    {
      question: "Will my website work on mobile devices?",
      answer:
        "Yes, all our websites are fully responsive and optimized to work seamlessly on mobile devices, tablets, and desktops.",
    },
    {
      question: "What happens after the website is launched?",
      answer:
        "We offer ongoing support, including website maintenance, updates, and additional marketing services to keep your business growing and your website running smoothly.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="faq-section bg-gray-100 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-gray-600 mb-8">
          Learn more about our website creation and marketing services for plumbers.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-md"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 bg-white text-left text-lg font-medium hover:bg-gray-50 transition duration-300"
              >
                <span>{faq.question}</span>
                <span>
                  {openIndex === index ? (
                    <span>&times;</span> // Close icon
                  ) : (
                    <span>+</span> // Open icon
                  )}
                </span>
              </button>
              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 p-4" : "max-h-0"
                } overflow-hidden bg-gray-50 text-gray-700`}
              >
                {openIndex === index && <p>{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
