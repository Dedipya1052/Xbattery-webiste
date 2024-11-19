import Example from "@/components/ui/Home1";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import Head from "next/head";

async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  console.log("Function called");
  const res = await client.getEntries({ content_type: "home" });
  console.log({ res });
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

export default function Home({ media }) {
  const router = useRouter();
   const currentURL = `https://xbattery.energy${router.pathname}`

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="keywords"
          content="XBattery, Giant Batteries, Energy Storage, BMS, IoT, Digital Twins, AI, Energy Transformation, Advanced BMS, Battery Management, Smart Batteries, Indian Energy, Renewable Energy"
        />
        <title>Xbattery</title>
        <meta
          name="description"
          content="Xbattery is building energy storage infrastructure in India, including electronics and software, to help businesses and grids store energy affordably and access it on demand."
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="XBattery" />
        <meta
          property="og:description"
          content="XBattery is building giant batteries to transform energy storage in India using advanced BMS, IoT, Digital Twins, and AI."
        />
        <meta
          property="og:image"
          content="/favicon.webp"
        />
        <meta property="og:url" content="https://xbattery.energy/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://x.com/Xbattery_" />
        <meta name="twitter:title" content="XBattery" />
        <meta
          name="twitter:description"
          content="XBattery is building giant batteries to transform energy storage in India using advanced BMS, IoT, Digital Twins, and AI."
        />
        <meta
          name="twitter:image"
          content="https://xbattery.energy/images/og-image.jpg"
        />

        <link rel="canonical" href={currentURL} />
      </Head>

      <Example media={media} />
    </>
  );
}
