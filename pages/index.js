import Example from "@/components/ui/Home1";
import ThinBanner from "@/components/ui/ThinBanner";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import Head from "next/head";
import FAQSchema from "@/components/ui/FAQSchema";

// Fetch home content
async function fetchHomeContent() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  
  const res = await client.getEntries({ content_type: "home" });
  return res.items;
}

// Fetch blogs from contentful CMS
async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "blog" });
  return res.items;
}


export async function getServerSideProps() {
  // Fetch home content for video
  let homeContent = await fetchHomeContent();
  const firstBlog = homeContent[0]; // Get the first blog
  
  // Map the fields to a cleaner format for video
  const homeMedia = {
    video1: firstBlog.fields.video1,
  };
  // Fetch blogs
  let blogs = await fetchBlogs();
  
  // Sort blogs by date (newest first) and take the top 3
  const recentBlogs = blogs
    .sort((a, b) => new Date(b.fields.date) - new Date(a.fields.date))
    .slice(0, 3)
    .map((blog) => ({
      title: blog.fields.title,
      thumbnail: blog.fields.thumbnail,
      categories: blog.fields.categories,
      slug: blog.fields.slug,
      date: blog.fields.date,
      description: blog.fields.description,
      author: blog.fields.author,
      subtitle: blog.fields.subtitle
    }));

  // Homepage FAQ data
  const homeFAQs = [
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
    },
    {
      question: "What makes Xbattery different from other BMS providers?",
      answer: "Xbattery offers India's first unified BMS solution that works across different applications - from electric vehicles to renewable energy storage and smart grid integration."
    },
    {
      question: "Does Xbattery provide solutions for electric vehicles?",
      answer: "Yes, Xbattery provides unified BMS solutions specifically designed for electric vehicles, ensuring optimal performance and safety of EV battery systems."
    }
  ];

  return {
    props: {
      media: homeMedia,
      recentBlogs,
      homeFAQs,
    },
  };
}

export default function Home({ media, recentBlogs, homeFAQs }) {
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
         Xbattery™ | Unified Battery Management System (BMS) & Advanced Energy Storage Solutions in India
        </title>
        <meta
          name="description"
          content="Xbattery™ provides advanced battery packs, energy storage systems, and India’s first unified BMS for EVs, renewable energy, and smart grid integration."
        />

        {/* Open Graph Meta Tags for Facebook and LinkedIn */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Xbattery™ | Unified Battery Management System (BMS) & Advanced Energy Storage Solutions in India"
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
        <meta property="og:image:height" content="630" />
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
      
      {/* FAQ Schema for SEO */}
      <FAQSchema faqs={homeFAQs} />
      
      {/* Site-wide notification banner above navbar (home theme, above nav) */}
      <ThinBanner topClass="top-0" theme="home" withSpacer />
      <Example media={media} recentBlogs={recentBlogs} /> 
    </>
  );
}
