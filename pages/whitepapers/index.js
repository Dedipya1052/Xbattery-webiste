import styles from "./styles.module.css";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";

import { createClient } from "contentful";
import Card from "@/components/ui/BlogCard/BlogCard";
import PdfCard from "@/components/ui/PdfCard";

// * fetch blogs from contentful CMS
async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "whitepaper" });
  return res.items;
}

//todo : getserversideprops or static ??
export async function getStaticProps() {
  let blogs = await fetchBlogs();
  blogs = blogs.map((blog) => ({
    title: blog.fields.title,
    thumbnail: blog.fields.thumbnail,
    // categories: blog.fields.categories,
    slug: blog.fields.slug,
    // date:blog.fields.date,
    // description:blog.fields.description,
    // author:blog.fields.author
  }));
  return {
    props: {
      blogs,
    },
  };
}

export default function Blogs({ blogs }) {
//   const [category, setCategory] = useState(null);
//   const [searchInput, setSearchInput] = useState("");

  // Create a unique list of all categories
//   const allCategories = Array.from(
//     new Set(blogs.flatMap((blog) => blog.categories))
//   );

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value === "all" ? null : event.target.value);
//     setSearchInput(""); // reset search on category change
//   };

//   const handleSearch = (event) => {
//     setSearchInput(event.target.value);
//     setCategory(null); // reset category on search
//   };
//   const filteredBlogs = blogs.filter(
//     (blog) =>
//       (!category || blog.categories.includes(category)) &&
//       (!searchInput ||
//         blog.title.toLowerCase().includes(searchInput.toLowerCase()))
//   );

  // console.log(filteredBlogs);
  return (
    <>
      <Head>
        <title>
          Blog | Best AI Headshot Generator for Exceptional User Experiences |
          Alter AI
        </title>
        <meta property="og:image" content="/images/thumbnail.webp" />
      </Head>
      <div className={styles.head1}>
      <div className="w-[100%]">
        {/* <div className={`${styles.head1} border-b-[1px] border-[#aeaeae]`}>
          <div className=" w-[96%] mx-auto pt-[1rem] pb-[1rem] text-[2.1rem] font-[520]">
            Whitepapers
          </div>
        </div> */}
        <div className=" mt-[3rem] mb-[5rem] flex flex-col justify-center items-center gap-[1rem]">
          <div className={`text-[2.3rem] md:text-[3.1rem] text-center font-semibold ${styles.head1}`}>
          Synthetic data use cases
          </div>
          <div className={`${styles.head1}  text-[1.05rem] md:text-[1.28rem] text-center  font-semibold`}>
          Investing basics—in plain English.
          </div>
          
        </div>
      </div>
      <div className={styles.wrapper}>
        {/* <div className={styles.utilsContainer}>
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearch}
            className={styles.searchInput}
          />
          <div className={styles.selectContainer}>
            <select
              value={category || "all"}
              onChange={handleCategoryChange}
              className={styles.select}
            >
              <option value="all">All Categories</option>
              {allCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div> */}
        <motion.div layout className={styles.card_grid}>
          <AnimatePresence>
            {blogs.map((blog, index) => (
              <PdfCard key={index} blog={blog} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      </div>
    </>
  );
}
