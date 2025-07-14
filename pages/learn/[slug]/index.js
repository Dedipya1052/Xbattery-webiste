import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import styles from "./slug.module.css";
import Head from "next/head";
//import TopBlogs from "@/components/TopBlogs";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
// import { FAQPageJsonLd } from 'next-seo';
import { Button, Image } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";
import Card from "@/components/ui/BlogCard/BlogCard";
import TopBlogs from "@/components/ui/TopBlogs";
import { Box } from "@chakra-ui/react";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";


const energyStorage = [
  { name: "Battery Energy Storage System", link: "/learn/battery-energy-storage-systems" },
  { name: "Emerging LDES Technologies", link: "/learn/emerging-ldes-technologies" },
  { name: "Understanding BMS in ESS", link: "/learn/understanding-the-brain-of-an-energy-storage-systems-the-bms" },
  { name: "Economics of Energy Storage", link: "/learn/understanding-the-economics-of-energy-storage-for-homes-and-businesses" }
];

const renewableEnergy = [
  { name: "Solar Energy", link: "/learn/solar-energy" },
  { name: "Wind Energy", link: "/learn/wind-energy" }, 
  { name: "Geothermal Energy", link: "/learn/geothermal-energy" },
  { name: "Environmental Impact", link: "/learn/environmental-impact-of-renewable-energy-projects" },
];

const electricVehicles = [
  { name: "EV vs ICE Costs", link: "/learn/ev-vs-ice-costs" },
  { name: "EV Charging", link: "/learn/ev-charging" },
  { name: "Indian EV Market", link: "/learn/indian-ev-market" },
  { name: "EVs and the Environment", link: "/learn/understanding-the-impact-of-electric-vehicles-on-the-environment" }
];

const electricity = [
  { name: "India’s Electricity Sector", link: "/learn/indias-electricity-sector" },
  { name: "Power Purchase Agreement", link: "/learn/power-purchase-agreement" },
  { name: "Indian Electricity Terminologies", link: "/learn/understanding-the-terminologies-in-the-indian-electricity-sector" }
];

const grid = [
  { name: "Renewable Integration", link: "/learn/renewable-integration" }, 
  { name: "Smart Grid", link: "/learn/smart-grid" },
  { name:"Understanding Smart Meters", link: "/learn/understanding-smart-meters"  },
  { name:"On-Grid vs Off-Grid", link: "/learn/understanding-the-differences-between-on-grid-and-off-grid-systems"  }
];

const batteries = [
  { name: "Understanding Lithium", link: "/learn/understanding-lithium" }, 
  { name: "Emerging Battery Technologies", link: "/learn/emerging-battery-technologies" },
  { name:"Understanding LFP Batteries", link:"/learn/understanding-lfp-batteries"},
  { name: "Future of Lithium UPS", link: "/learn/how-lithium-ups-challenges-traditional-ups-as-power-backup-of-the-future" }
];


const allBlogs = [
  {
    name: "Energy storage",
    link: "/learn/energy-storage",
  },
  ...energyStorage,
  {
    name: "Renewable energy",
    link: "/learn/renewable-energy",
  },
  ...renewableEnergy,
  {
    name: "Electricity",
    link: "/learn/electricity",
  },
  ...electricity,
  {
    name: "Electric Vehicles",
    link: "/learn/electric-vehicles",
  },
  ...electricVehicles,
  {
    name: "Batteries",
    link: "/learn/batteries",
  },
  ...batteries,
  {
    name: "Grid",
    link: "/learn/grid",
  },
  ...grid,
];

// Function to find the index of the current blog
const findBlogIndex = (slug) => {
  return allBlogs.findIndex((blog) => blog.link.includes(slug));
};

// * fetch blogs from contentful CMS
async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "articles" });
  return res.items;
}

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          alt="BlogImage"
          height={node.data.target.fields.file.details.image.height}
          width={node.data.target.fields.file.details.image.width}
          className={styles.embeddedImage}
        />
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
    table: (node, children) =>
      // Wrap the table in a div with the tableWrapper class only if the table exists
      node && node.content && node.content.length > 0 ? (
        <div className={styles.tableWrapper}>
          <table>
            <tbody>{children}</tbody>
          </table>
        </div>
      ) : (
        // If there is no table, render the children as-is
        children
      ),
  },
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "articles" });

  // construct paths to build individual blog pages at build time
  const paths = res.items.map((blog) => ({
    params: { slug: blog.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  //get individual blog
  const res = await client.getEntries({
    content_type: "articles",
    "fields.slug": params.slug,
  });
  const currentBlog = res.items[0].fields;

  //console.log(currentBlog);
  const {
    title,
    categories,
    description,
    coverImage,
    date,
    author,
    blogContent,
    slug,
    modifiedOn,
    animation,
    faqs,
  } = currentBlog;
  // console.log({ blog: res.items });
  // const blogs = await fetchBlogs();
  //console.log("initial blogs :",blogs.length);
  // let filteredBlogs = blogs.filter((blog) => {
  //   return blog.fields.slug !== currentBlog.slug;
  // });
  // console.log("filtered blogs :",filteredBlogs.length);
  // filteredBlogs = filteredBlogs.map((blog) => ({
  //   title: blog.fields.title,
  //   thumbnail: blog.fields.thumbnail,
  //   categories: blog.fields.categories,
  //   slug: blog.fields.slug,
  // }));

  //console.log({blogs});
  return {
    props: {
      blog: {
        title,
        categories,
        description,
        coverImage,
        date,
        author,
        blogContent,
        slug,
        animation: animation ? animation : null,
        faqs: faqs ? faqs : null,
        modifiedOn
      },
      // blogs:filteredBlogs,
    },
  };
}

export default function BlogPage({ blog }) {
  //console.log(blog)
  //console.log("blogs : ",blogs);
  const router = useRouter();
  // const { title, categories,description, coverImage, date, author, blogContent ,slug,modifiedOn,faqs} =
  // blog.fields;
  const {
    title,
    categories,
    description,
    coverImage,
    date,
    author,
    blogContent,
    slug,
    animation,
    faqs,
    modifiedOn
  } = blog;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentBlogIndex = findBlogIndex(slug);

  // Determine the next and previous blogs
  const prevBlog = currentBlogIndex > 0 ? allBlogs[currentBlogIndex - 1] : null;
  const nextBlog =
    currentBlogIndex < allBlogs.length - 1
      ? allBlogs[currentBlogIndex + 1]
      : null;

  useEffect(() => {
    if (animation) {
      // Extract and inject styles dynamically on the client side only
      const styleMatch = animation.match(/<style[^>]*>([\s\S]*?)<\/style>/);
      if (styleMatch) {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = styleMatch[1];
        document.head.appendChild(styleElement);

        // Cleanup function to remove the style element
        return () => {
          if (document.head.contains(styleElement)) {
            document.head.removeChild(styleElement);
          }
        };
      }
    }
  }, [animation]);

  // Extract the content without style tags
  const contentMatch = animation
    ? animation.replace(/<style[^>]*>([\s\S]*?)<\/style>/, "")
    : "";

  // console.log("blog deatils : ",blog);

  // console.log("faqs: ",faqs);

  const dateObject = new Date(date);

  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = dateObject.getFullYear();
  const month = dateObject.getMonth();
  const day = dateObject.getDate();
  // const hours = dateObject.getHours();
  // const minutes = dateObject.getMinutes();
  // const seconds = dateObject.getSeconds();

  return (
    <div className={styles.head1}>
      <Head>
        <title>{`${title} | Learn | Xbattery`}</title>
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https:${coverImage.fields.file.url}`}
        />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://xbattery.energy/learn/${slug}`} />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={modifiedOn} />
        <link rel="canonical" href={`https://xbattery.energy/learn/${slug}`} />
      </Head>
      {/* {faqs && faqs.length>0 &&
      <FAQPageJsonLd
          mainEntity={faqs}
      />
      } */}
      <div className={styles.container}>
        <div
          className={styles.affBackButton}
          onClick={() => router.push("/learn")}
        >
          {" "}
          <IoArrowBack /> <p>Back</p>
        </div>
        <h1 className={styles.title}>{title}</h1>
        {/* <div className={styles.adDiv}>
          <div className={styles.author}>{`By ${author}`}</div>
          <div
            className={styles.datee}
          >{`${monthName[month]} ${day}, ${year}`}</div>
        </div> */}
        <div className={styles.categories}>
          {categories.map((category) => (
            <span key={category} className={styles.category}>
              #{category}
            </span>
          ))}
        </div>
        <Image
          src={"https:" + coverImage.fields.file.url}
          alt={coverImage.fields.title}
          width={coverImage.fields.file.details.image.width}
          height={coverImage.fields.file.details.image.height}
          className={styles.coverImage}
        />
        <div className={styles.blogholder}>
          <article className={styles.blog} style={{ marginTop: "1rem" }}>
            {documentToReactComponents(blogContent, renderOption)}
          </article>
        </div>
        {isMounted && animation && (
          <div className="mt-[4rem] flex justify-center items-center w-[100%]  mb-[2rem]">
            <div dangerouslySetInnerHTML={{ __html: contentMatch }} />
          </div>
        )}
        {/* Next and Previous buttons */}
        <div
          className={`flex ${(prevBlog && nextBlog)? "justify-between" : "justify-center"} mt-[6rem] mb-[-3.5rem] flex-wrap gap-[1.2rem] sm:gap-0 `}
        >
          {prevBlog && (
            <Button
              onClick={() => router.push(prevBlog.link)}
              bg="white"
              color="black"
              border="1px solid #000"
              _hover={{   color: "rgb(42, 193, 42)" }}
            >
              Previous: {prevBlog.name}
            </Button>
          )}
          {nextBlog && (
            <Button
              onClick={() => router.push(nextBlog.link)}
              bg="white"
              color="black"
              border="1px solid #000"
              _hover={{  color: "rgb(42, 193, 42)" }}
            >
              Next: {nextBlog.name}
            </Button>
          )}
        </div>
      </div>
      {/* <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[5rem] mb-[6rem]"></div> */}
      {/* <TopBlogs blogs={blogs} slug={slug}/> */}
      {/* <TopBlogs blogs={blogs} slug={slug}/> */}

      {/* <div
        className={`w-[100%] mt-[-2rem] mx-auto ${styles.head1} flex xl:flex-row  justify-between border-t-[0.8px] border-b-[0.8px] border-black`}
      >
        <div className="w-[65%] border-r-[0.8px] border-black">
          <div className=" text-[1.2rem] pb-[0.8rem] pl-[2rem]  pt-[1rem] border-b-[0.8px] border-black font-semibold">
            Topics
          </div>
          <div className=" flex flex-col gap-[1rem] pl-8">
            <div className="grid grid-cols-3 ">
              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="/learn/energy-storage">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Energy Storage
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    {energyStorage.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/renewable-energy">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Renewable Energy
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    {renewableEnergy.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/electricity">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Electricity
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    {electricity.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="/learn/electric-vehicles">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Electric Vehicles
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    {electricVehicles.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/batteries">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Batteries
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    {batteries.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start justify-start p-4">
                <div className="p-0.5 rounded-md text-left">
                  <h2
                    className={`text-[1rem] font-semibold mb-2 ${styles.head1} leading-[45px] hover:text-[#27b633]`}
                  >
                    <Link href="learn/grid">
                      {" "}
                      <span className="hover:text-[#27b633] hover:no-underline">
                        Grid
                      </span>
                    </Link>
                  </h2>
                </div>
                <div className=" flex flex-col justify-start mt-[-0.5rem]">
                  <ul className=" pl-[0.4rem] flex flex-col gap-1">
                    {grid.map((item, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer text-[0.9rem] font-semibold ${styles.head1}`}
                      >
                        <Link
                          href={item.link}
                          className="hover:text-[#27b633] opacity-[70%]"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] flex flex-col gap-[2rem]">
          <div className="flex flex-col gap-[1.5rem]">
            <div className=" text-[1.2rem] pb-[0.8rem] pl-[0.8rem]  pt-[1rem] border-b-[0.8px] border-black font-semibold">
              Company
            </div>
            <div className="flex flex-col gap-[0.8rem]">
              <div className="text-[0.9rem] pl-[0.8rem] pr-[0.8rem]">
                This information is educational, and is not an offer to sell or
                a solicitation of an offer to buy any security. This information
                is not a recommendation to buy, hold, or sell an investment or
                financial product, or take any action. This information is
                neither individualized nor a research report, and must not serve
                as the basis for any investment decision. All investments
                involve risk, including the possible loss of capital. Past
                performance does not guarantee future results or returns. Before
                making decisions with legal, tax, or accounting effects, you
                should consult appropriate professionals.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.5rem]">
            <div className=" text-[1.2rem] pb-[0.8rem] pl-[0.8rem] border-b-[0.8px] border-black font-semibold">
              Join us
            </div>
            <div className="flex  gap-[1.5rem] pl-[0.8rem]">
              <FiInstagram
                size={"1.4rem"}
                className=" cursor-pointer hover:text-green-500"
              />
              <FaTwitter
                size={"1.4rem"}
                className=" cursor-pointer  hover:text-green-500"
              />
              <FaYoutube
                size={"1.4rem"}
                className=" cursor-pointer  hover:text-green-500"
              />
              <FaFacebook
                size={"1.4rem"}
                className=" cursor-pointer  hover:text-green-500"
              />
              <MdEmail
                size={"1.4rem"}
                className=" cursor-pointer  hover:text-green-500"
              />
            </div>
          </div>
          <div className="">
          <p className="text-gray-400 text-left font-sans pl-[0.8rem] mt-3 text-[0.9rem]">
            © 2024 XBattery. All rights reserved.
          </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
