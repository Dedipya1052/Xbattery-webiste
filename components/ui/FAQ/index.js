import { useState } from 'react';
import { extractFAQsFromContent } from '@/utils/faqExtractor';
import Head from 'next/head';

const FAQ = ({ faqs, content }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Extract FAQs from content if no structured FAQs provided
  let displayFAQs = [];
  
  if (faqs && Array.isArray(faqs)) {
    displayFAQs = faqs;
  } else if (faqs && faqs.fields && Array.isArray(faqs.fields)) {
    displayFAQs = faqs.fields;
  } else if (faqs && faqs.items && Array.isArray(faqs.items)) {
    displayFAQs = faqs.items;
  } else if (faqs && typeof faqs === 'object' && faqs !== null) {
    if (faqs['@type'] === 'FAQPage' && faqs.mainEntity && Array.isArray(faqs.mainEntity)) {
      displayFAQs = faqs.mainEntity;
    } else {
      displayFAQs = [faqs];
    }
  } else if (content) {
    displayFAQs = extractFAQsFromContent(content);
  }

  if (!displayFAQs || displayFAQs.length === 0) {
    return null;
  }

  // Generate schema markup for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": displayFAQs.map((faq) => {
      const question = faq.question || faq.fields?.question || faq.name || faq.title;
      const answer = faq.answer || faq.fields?.answer || faq.text || faq.description;
      return {
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      };
    }).filter(faq => faq.name && faq.acceptedAnswer && faq.acceptedAnswer.text)
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Schema markup for SEO */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
      </Head>
      
      <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-4">
        {displayFAQs.map((faq, index) => {
          const question = faq.question || faq.fields?.question || faq.name || faq.title;
          const answer = faq.answer || faq.fields?.answer || faq.text || faq.description;
          
          if (!question || !answer) return null;

          return (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800">{question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default FAQ;