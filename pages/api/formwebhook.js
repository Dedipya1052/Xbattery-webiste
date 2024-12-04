export default async function handler(req, res) {
    try {
      if (req.method === 'POST') {
        // Validate that the body contains the expected data
        if (!req.body || typeof req.body !== 'object') {
          return res.status(400).json({ message: 'Invalid payload. Expecting a JSON object.' });
        }
  
        // Extract data from the request body
        const data = req.body;
  
        // Log or process the submitted data
        console.log('Webhook received:', data);
  
        // Respond to Youform
        res.status(200).json({ message: 'Webhook received successfully!' });
      } else {
        // Handle non-POST requests
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: `Method ${req.method} not allowed. Use POST.` });
      }
    } catch (error) {
      // Log the error for debugging
      console.error('Error handling webhook:', error);
  
      // Respond with a 500 Internal Server Error
      res.status(500).json({
        message: 'An error occurred while processing the webhook.',
        error: error.message,
      });
    }
  }
  
  