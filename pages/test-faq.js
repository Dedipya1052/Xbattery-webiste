import React from 'react';
import Head from 'next/head';
import FAQ from '@/components/ui/FAQ';
import FAQSchema from '@/components/ui/FAQSchema';

// Test FAQ data
const testFAQs = [
  {
    question: "What is Xbattery BMS?",
    answer: "Xbattery BMS is India's first unified Battery Management System for Energy Storage & EVs, integrating electronics and software to provide affordable and reliable energy solutions."
  },
  {
    question: "What types of batteries does Xbattery support?",
    answer: "Xbattery BMS supports various lithium battery chemistries, including LiFePO4, NMC, and LTO, for both energy storage and electric vehicle applications."
  },
  {
    question: "How does Xbattery ensure battery safety?",
    answer: "Xbattery BMS incorporates advanced safety features such as over-voltage protection, under-voltage protection, over-current protection, temperature monitoring, and cell balancing to ensure optimal battery health and safety."
  }
];

const TestFaqPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <Head>
        <title>Test FAQ Schema | Xbattery</title>
        <meta name="description" content="Test page for FAQ schema validation" />
      </Head>

      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={testFAQs} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Test FAQ Schema</h1>
        
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">FAQ Schema JSON-LD (for debugging)</h2>
          <pre className="bg-gray-700 p-3 rounded-md text-sm overflow-x-auto">
            {JSON.stringify(testFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            })), null, 2)}
          </pre>
        </div>

        <FAQ faqs={testFAQs} />
      </div>
    </div>
  );
};

export default TestFaqPage;
