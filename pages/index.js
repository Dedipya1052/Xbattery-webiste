import Example from "@/components/ui/Home1";
import { createClient } from "contentful";


async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  console.log("Function called")
  const res = await client.getEntries({ content_type: "home" });
  console.log({res});
  return res.items;
}

// Get only the first blog
export async function getStaticProps() {
  let blogs = await fetchBlogs();
  const firstBlog = blogs[0]; // Get the first blog
  

  // Map the fields to a cleaner format
  const media = {
    video1: firstBlog.fields.video1,
   
  };
  // console.log(media);

  return {
    props: {
      media, // Return only the first blog
    },
  };
}

export default function Home({media}) {
  return (
    <>
     <Example media={media}/>
    
    </>
  );
}
