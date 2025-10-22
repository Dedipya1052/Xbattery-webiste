// Utility function to extract FAQs from blog content
export function extractFAQsFromContent(content) {
  console.log('🔍 extractFAQsFromContent called with:', typeof content);
  
  if (!content) {
    console.log('❌ No content provided');
    return [];
  }

  try {
    // Convert content to string if it's a rich text object
    let contentString = '';
    
    if (typeof content === 'string') {
      contentString = content;
      console.log('📝 Using string content directly');
    } else if (content.content && Array.isArray(content.content)) {
      // Extract text from rich text content
      contentString = extractTextFromRichText(content);
      console.log('📝 Extracted text from rich text content');
    }
    
    console.log('📄 Content string length:', contentString.length);
    console.log('📄 Content preview:', contentString.substring(0, 200) + '...');

    // Look for FAQ patterns in the content
    const faqPatterns = [
      // Pattern 1: "Frequently Asked Questions:" followed by numbered questions
      /Frequently Asked Questions:?\s*([\s\S]*?)(?=\n\n|\n[A-Z]|$)/i,
      // Pattern 2: "FAQ" followed by numbered questions
      /FAQ:?\s*([\s\S]*?)(?=\n\n|\n[A-Z]|$)/i,
      // Pattern 3: "Questions and Answers" followed by numbered questions
      /Questions and Answers:?\s*([\s\S]*?)(?=\n\n|\n[A-Z]|$)/i,
      // Pattern 4: Just look for numbered questions anywhere in content
      /(\d+\.\s+[^?]+\?[\s\S]*?)(?=\d+\.|$)/g
    ];

    let faqSection = '';
    for (const pattern of faqPatterns) {
      const match = contentString.match(pattern);
      if (match) {
        faqSection = match[1] || match[0];
        break;
      }
    }

    if (!faqSection) {
      console.log('❌ No FAQ section found in content');
      return [];
    }
    
    console.log('✅ FAQ section found:', faqSection.substring(0, 200) + '...');

    // Extract individual Q&A pairs
    const qaPairs = [];
    
    // Split by numbered questions (1., 2., 3., etc.)
    const questionMatches = faqSection.match(/(\d+\.\s+[^?]+\?)/g);
    
    if (questionMatches) {
      for (let i = 0; i < questionMatches.length; i++) {
        const question = questionMatches[i].replace(/^\d+\.\s*/, '').trim();
        
        // Find the answer for this question
        const questionIndex = faqSection.indexOf(questionMatches[i]);
        const nextQuestionIndex = i < questionMatches.length - 1 
          ? faqSection.indexOf(questionMatches[i + 1])
          : faqSection.length;
        
        let answer = faqSection.substring(questionIndex + questionMatches[i].length, nextQuestionIndex)
          .trim()
          .replace(/^\n+/, '')
          .replace(/\n+$/, '');
        
        // Clean up the answer
        answer = answer.replace(/^\d+\.\s*/, '').trim();
        
        if (question && answer && answer.length > 10) {
          qaPairs.push({
            question: question,
            answer: answer
          });
        }
      }
    }

    console.log('📊 Final extracted FAQs:', qaPairs.length);
    console.log('📋 FAQ pairs:', qaPairs);
    return qaPairs;
  } catch (error) {
    console.error('Error extracting FAQs from content:', error);
    return [];
  }
}

// Helper function to extract text from rich text content
function extractTextFromRichText(node) {
  console.log('🔍 extractTextFromRichText called with:', typeof node);
  
  if (typeof node === 'string') return node;
  
  if (node.content && Array.isArray(node.content)) {
    console.log('📝 Processing rich text content with', node.content.length, 'items');
    const result = node.content.map(item => {
      if (typeof item === 'string') return item;
      if (item.value) return item.value;
      if (item.content) return extractTextFromRichText(item);
      return '';
    }).join('');
    console.log('📄 Extracted text length:', result.length);
    return result;
  }
  
  if (node.value) return node.value;
  
  return '';
}

// Alternative method: Look for FAQ patterns in rendered HTML
export function extractFAQsFromHTML(htmlContent) {
  if (!htmlContent) return [];

  try {
    // Create a temporary DOM element to parse HTML
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;

    // Look for FAQ sections
    const faqSections = tempDiv.querySelectorAll('*');
    let faqContent = '';

    for (const element of faqSections) {
      const text = element.textContent || '';
      if (text.includes('Frequently Asked Questions') || 
          text.includes('FAQ') || 
          text.includes('Questions and Answers')) {
        faqContent = text;
        break;
      }
    }

    if (!faqContent) return [];

    // Extract Q&A pairs using the same logic as above
    return extractFAQsFromContent(faqContent);
  } catch (error) {
    console.error('Error extracting FAQs from HTML:', error);
    return [];
  }
}
