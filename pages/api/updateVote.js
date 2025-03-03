import { createClient } from 'contentful-management';

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { entryId, voteType, previousVote, isRemoval } = req.body;

  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE);
    const environment = await space.getEnvironment('master');
    const entry = await environment.getEntry(entryId);

    //console.log({space,environment,entry});
    

    // Handle removing previous vote if exists
    if (previousVote) {
      const prevVoteCount = parseInt(entry.fields[previousVote]?.['en-US'] || '0', 10);
      entry.fields[previousVote] = {
        'en-US': Math.max(0, prevVoteCount - 1)
      };
    }

    

    // Add new vote if not removing
    if (voteType && !isRemoval) {
      const currentCount = parseInt(entry.fields[voteType]?.['en-US'] || '0', 10);
      entry.fields[voteType] = {
        'en-US': currentCount + 1
      };
    }

    

    // Update and publish the entry
    const updatedEntry = await entry.update();
    await updatedEntry.publish();

    res.status(200).json({
      success: true,
      votes: {
        upvote: parseInt(updatedEntry.fields.upvote?.['en-US'] || '0', 10),
        downvote: parseInt(updatedEntry.fields.downvote?.['en-US'] || '0', 10)
      }
    });
  } catch (error) {
    console.error('Error updating vote:', error);
    res.status(500).json({ 
      message: 'Error updating vote',
      error: error.message 
    });
  }
}