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

  return (
    <>
      <Head>
        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Basic SEO Meta Tags */}
        <meta
          name="keywords"
          content="XBattery, Giant Batteries, Energy Storage, BMS, IoT, Digital Twins, AI, Energy Transformation, Advanced BMS, Battery Management, Smart Batteries, Indian Energy, Renewable Energy"
        />
        <title>
          Xbattery™ - India's First Unified BMS for Energy Storage & EVs |
          Advanced Battery Packs
        </title>
        <meta
          name="description"
          content="Xbattery builds lithium battery packs in India, integrating electronics and software to help businesses, EVs, and grids store and access energy affordably."
        />

        {/* Open Graph Meta Tags for Facebook and LinkedIn */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="XBattery™ - India's First Unified BMS for Energy Storage & EVs"
        />
        <meta
          property="og:description"
          content="Xbattery builds lithium battery packs in India, integrating electronics and software to help businesses, EVs, and grids store and access energy affordably."
        />
        <meta property="og:url" content="https://xbattery.energy" />
        <meta
          property="og:image"
          content="https://xbattery.energy/images/og-image.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://x.com/Xbattery_" />
        <meta
          name="twitter:title"
          content="XBattery™ - India's First Unified BMS for Energy Storage & EVs"
        />
        <meta
          name="twitter:description"
          content="Xbattery is building lithium battery packs in India, including electronics and software, to help businesses, EVs, and grids store energy affordably and access it on demand."
        />
        <meta
          name="twitter:image"
          content="https://xbattery.energy/images/og-image.png"
        />

        {/* Hreflang Links */}
        <link rel="alternate" hreflang="en-in" href="https://xbattery.energy" />
        <link rel="alternate" hreflang="en" href="https://xbattery.energy" />

        {/* Favicon */}
        <link rel="icon" type="image/webp" href="/favicon.webp" />

        {/* Additional Open Graph Tags */}
        <meta property="og:site_name" content="XBattery" />
        <meta property="article:author" content="XBattery Team" />

       
      </Head>

      <Example media={media} />
    </>
  );
}
