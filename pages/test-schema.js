import Head from 'next/head';
import FAQSchema from '@/components/ui/FAQSchema';

// Test FAQ data for schema validation
const testFAQs = [
  {
    question: "What is Xbattery BMS?",
    answer: "Xbattery BMS is India's first unified Battery Management System for Energy Storage & EVs, integrating electronics and software to provide affordable and reliable energy solutions."
  },
  {
    question: "What services does Xbattery provide?",
    answer: "Xbattery provides advanced battery packs, energy storage systems, and India's first unified BMS for EVs, renewable energy, and smart grid integration."
  },
  {
    question: "How does Xbattery help with energy storage?",
    answer: "Xbattery builds lithium battery packs in India, integrating electronics and software to help businesses, EVs, and grids store and access energy affordably."
  }
];

const TestSchemaPage = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <Head>
        <title>Test FAQ Schema | Xbattery</title>
        <meta name="description" content="Test page for FAQ schema validation" />
      </Head>

      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={testFAQs} />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">FAQ Schema Test Page</h1>
        
        <div className="mb-8 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Generated FAQ Schema JSON-LD</h2>
          <pre className="bg-gray-700 p-3 rounded-md text-sm overflow-x-auto">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": testFAQs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }, null, 2)}
          </pre>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">FAQ Content</h2>
          <div className="space-y-4">
            {testFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-900 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Schema Validation Instructions:</h3>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Visit <a href="https://validator.schema.org/" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">Schema.org Validator</a></li>
            <li>Enter this page URL: <code className="bg-gray-700 px-2 py-1 rounded">https://xbattery.energy/test-schema</code></li>
            <li>Click "Run new test" to validate the FAQ schema</li>
            <li>You should see FAQ structured data detected</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TestSchemaPage;
