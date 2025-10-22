import Head from 'next/head';
import { extractFAQsFromContent } from '@/utils/faqExtractor';

const FAQSchema = ({ faqs, content }) => {
  // If we have structured FAQs from Contentful, use those
  let processedFAQs = [];
  
  if (faqs && Array.isArray(faqs)) {
    processedFAQs = faqs;
  } else if (faqs && faqs.fields && Array.isArray(faqs.fields)) {
    processedFAQs = faqs.fields;
  } else if (faqs && faqs.items && Array.isArray(faqs.items)) {
    processedFAQs = faqs.items;
  } else if (faqs && typeof faqs === 'object' && faqs !== null) {
    // Check if this is already a complete FAQ schema
    if (faqs['@type'] === 'FAQPage' && faqs.mainEntity && Array.isArray(faqs.mainEntity)) {
      processedFAQs = faqs.mainEntity;
    } else {
      processedFAQs = [faqs];
    }
  } else if (content) {
    // If no structured FAQs, try to extract from content
    processedFAQs = extractFAQsFromContent(content);
  }

  if (!processedFAQs || processedFAQs.length === 0) {
    return null;
  }

  // Process FAQs for schema
  const processedFaqs = processedFAQs.map(faq => {
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
  }).filter(faq => faq.name && faq.acceptedAnswer.text);

  if (processedFaqs.length === 0) {
    return null;
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": processedFaqs
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </Head>
  );
};

export default FAQSchema;