// import { createClient } from "contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, INLINES } from "@contentful/rich-text-types";
// import styles from "./slug.module.css";
// import Head from "next/head";
// //import TopBlogs from "@/components/TopBlogs";
// import { GoDotFill } from "react-icons/go";
// import Link from "next/link";
// import { Button, Image } from "@chakra-ui/react";
// import { IoArrowBack } from "react-icons/io5";
// import { useRouter } from "next/router";
// import Card from "@/components/ui/BlogCard/BlogCard";
// import TopBlogs from "@/components/ui/TopBlogs";
// import { MathJax, MathJaxContext } from 'better-react-mathjax';




// // * fetch blogs from contentful CMS
//  async function fetchBlogs() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });

//   const res = await client.getEntries({ content_type: "media" });
//   return res.items;
// }



// const renderOption = {
//   renderNode: {
//     [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
//       return (
//         <Image
//           src={`https:${node.data.target.fields.file.url}`}
//           alt="BlogImage"
//           height={node.data.target.fields.file.details.image.height}
//           width={node.data.target.fields.file.details.image.width}
//           className={styles.embeddedImage}
//         />
//       );
//     },
//     [INLINES.HYPERLINK]: (node, children) => {
//       return (
//         <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
//           {children}
//         </a>
//       );
//     },
//     [BLOCKS.PARAGRAPH]: (node, children) => {
//       const textContent = node.content.map(item => item.value).join(''); // Combine all text parts
    
//       // Check for custom markers for code
//       if (textContent.includes('[[code]]') && textContent.includes('[[*code]]')) {
//         const codeText = textContent
//           .replace('[[code]]', '')
//           .replace('[[*code]]', '')
//           .trim(); // Extract and clean the code
//         return (
//           <pre className={styles.codeBlock}>
//             <code>{codeText}</code>
//           </pre>
//         );
//       }

//       if (textContent.includes('[[where]]') && textContent.includes('[[*where]]')) {
//         const codeText = textContent
//           .replace('[[where]]', '')
//           .replace('[[*where]]', '')
//           .trim(); // Extract and clean the code
//         return (
//           <pre className={styles.whereBlock}>
//             <MathJax>{codeText}</MathJax>
//           </pre>
//         );
//       }
    
//       // Check if the content contains LaTeX mathematical formulas
//       if (textContent.includes('$$')) {
//         return (
//           <MathJax>
//             {textContent}
//           </MathJax>
//         );
//       }
    
//       return <p>{children}</p>; // Otherwise, treat it as normal text
//     },
//     'table': (node, children) => (
//       // Wrap the table in a div with the tableWrapper class only if the table exists
//       node && node.content && node.content.length > 0 ? (
//         <div className={styles.tableWrapper}>
//          <table>
//             <tbody>
//               {children}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         // If there is no table, render the children as-is
//         children
//       )
//     ),
//   },
// };

// const client = createClient({
//   space: process.env.CONTENTFUL_SPACE,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

// export async function getStaticPaths() {
//   const res = await client.getEntries({ content_type: "media" });

//   // construct paths to build individual blog pages at build time
//   const paths = res.items.map((blog) => ({
//     params: { slug: blog.fields.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }) {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });

//   //get individual blog
//   const res = await client.getEntries({
//     content_type: "media",
//     "fields.slug": params.slug,
//   });
//   const currentBlog= res.items[0].fields;

//   //console.log(currentBlog);
//   const {
//     title,
//     categories,
//     description,
//     coverImage,
//     date,
//     author,
//     blogContent,
//     slug,
//     modifiedOn,
//     faqs
//   } = currentBlog;
//   // console.log({ blog: res.items });
//   const blogs = await fetchBlogs();
//   //console.log("initial blogs :",blogs.length);
//   let filteredBlogs = blogs.filter((blog) => {
//     return blog.fields.slug !== currentBlog.slug;
//   });
//   // console.log("filtered blogs :",filteredBlogs.length);
//   filteredBlogs = filteredBlogs.map((blog) => ({
//     title: blog.fields.title,
//     thumbnail: blog.fields.thumbnail,
//     categories: blog.fields.categories,
//     slug: blog.fields.slug,
//   }));

//   //console.log({blogs});
//   return {
//     props: {
//       blog: {
//         title,
//         categories,
//         description,
//         coverImage,
//         date,
//         author,
//         blogContent,
//         slug,
//         faqs : faqs?faqs:null ,
//         modifiedOn
//       },
//       blogs:filteredBlogs,
//     },
//   };
// }

// export default function BlogPage({ blog,blogs}) {
//   //console.log(blog)
//   //console.log("blogs : ",blogs);
//   const router=useRouter();
//   // const { title, categories,description, coverImage, date, author, blogContent ,slug,modifiedOn,faqs} =
//   // blog.fields;
//   const {
//     title,
//     categories,
//     description,
//     coverImage,
//     date,
//     author,
//     blogContent,
//     slug,
//     faqs,
//     modifiedOn
//   } = blog;

//   // console.log("blog deatils : ",blog);
  
  
//   // console.log("faqs: ",faqs);

//   const dateObject = new Date(date);

//   const monthName = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const year = dateObject.getFullYear();
//   const month = dateObject.getMonth(); 
//   const day = dateObject.getDate();
//   // const hours = dateObject.getHours();
//   // const minutes = dateObject.getMinutes();
//   // const seconds = dateObject.getSeconds();

//   return (
//     <div className={styles.head1}>
//       <Head>
//         <title>{`${title} | Blog | Xbattery`}</title>
//         <meta name="description" content={description} />
//         <meta
//           property="og:image"
//           content={`https:${coverImage.fields.file.url}`}
//         />
//         <meta property="og:site_name" content="Xbattery" />
//         <meta property="og:title" content={title} />
//         <meta property="og:type" content="article" />
//         <meta property="og:url" content={`https://xbattery.energy/blog/${slug}`} />
//         <meta property="article:published_time" content={date} />
//         <meta property="article:modified_time" content={modifiedOn} />
//         <link rel="canonical" href={`https://xbattery.energy/blog/${slug}`} />
//       </Head>
//       {/* { faqs.length>0 &&
//       <FAQPageJsonLd
//           mainEntity={faqs}
//       />
//       } */}

//       <MathJaxContext>
      
//       <div className={styles.container}>
//      <div className={styles.affBackButton} onClick={()=>router.push("/media")}> <IoArrowBack /> <p>Back</p></div>
//         <h2 className={styles.title}>{title}</h2>
//         <div className={styles.adDiv}>
//           <div className={styles.author}>{`By ${author}`}</div>
//           <div
//             className={styles.datee}
//           >{`${monthName[month]} ${day}, ${year}`}</div>
//         </div>
//         <div className={styles.categories}>
//           {categories.map((category) => (
//             <span key={category} className={styles.category}>
//               #{category}
//             </span>
//           ))}
//         </div>
//         <Image
//           src={"https:" + coverImage.fields.file.url}
//           alt={coverImage.fields.title}
//           width={coverImage.fields.file.details.image.width}
//           height={coverImage.fields.file.details.image.height}
//           className={styles.coverImage}
//         />
//         <div className={styles.blogholder}>
//           <article className={styles.blog} style={{ marginTop: "1rem" }}>
//             {documentToReactComponents(blogContent, renderOption)}
//           </article>
         
//         </div>
//       </div>
//       <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[5rem] mb-[6rem]"></div>

//       </MathJaxContext>
     
//       <TopBlogs blogs={blogs} slug={slug}/>
//     </div>
//   );
// }








// import { createClient } from "contentful";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { BLOCKS, INLINES } from "@contentful/rich-text-types";
// import Head from "next/head";
// import { GoDotFill } from "react-icons/go";
// import Link from "next/link";
// import { Button, Image } from "@chakra-ui/react";
// import { IoArrowBack } from "react-icons/io5";
// import { useRouter } from "next/router";
// import Card from "@/components/ui/BlogCard/BlogCard";
// import TopBlogs from "@/components/ui/TopBlogs";
// import { MathJax, MathJaxContext } from 'better-react-mathjax';

// // CSS Module for the updated styles
// const styles = {
//   head1: "w-full",
//   container: "max-w-4xl mx-auto px-4 md:px-0",
//   affBackButton: "flex items-center text-green-700 hover:text-green-900 cursor-pointer mt-8 mb-4 font-medium",
//   title: "text-3xl md:text-4xl font-bold text-gray-800 mb-4",
//   adDiv: "flex items-center space-x-4 mb-4 text-sm text-gray-600",
//   author: "font-medium",
//   datee: "flex items-center",
//   categories: "flex flex-wrap gap-2 mb-6",
//   category: "text-sm text-green-700 bg-green-50 px-3 py-1 rounded-full hover:bg-green-100 transition-colors",
//   coverImage: "w-full h-auto rounded-lg mb-8 shadow-md",
//   blogholder: "prose prose-lg max-w-none",
//   blog: "text-gray-800",
//   codeBlock: "bg-gray-100 p-4 rounded-md overflow-x-auto text-sm my-4",
//   whereBlock: "bg-green-50 p-4 rounded-md my-4 border-l-4 border-green-600",
//   embeddedImage: "w-full h-auto rounded-md my-6",
//   tableWrapper: "overflow-x-auto my-6",
//   spotlight: "bg-green-700 text-white py-10 px-6 rounded-lg mb-10 mt-6 shadow-lg",
//   spotlightTitle: "text-3xl font-bold mb-2",
//   spotlightSubtitle: "text-xl mb-4",
//   spotlightContent: "text-white/90",
//   shareIcons: "flex space-x-4 mt-6",
//   shareIcon: "w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors",
// };

// // * fetch blogs from contentful CMS
// async function fetchBlogs() {
//   const client = createClient({
//     space: process.env.CONTENTFUL_SPACE,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//   });

//   const res = await client.getEntries({ content_type: "media" });
//   return res.items;
// }

// const renderOption = {
//   renderNode: {
//     [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
//       return (
//         <Image
//           src={`https:${node.data.target.fields.file.url}`}
//           alt="BlogImage"
//           height={node.data.target.fields.file.details.image.height}
//           width={node.data.target.fields.file.details.image.width}
//           className={styles.embeddedImage}
//         />
//       );
//     },
//     [INLINES.HYPERLINK]: (node, children) => {
//       return (
//         <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 underline">
//           {children}
//         </a>
//       );
//     },
//     [BLOCKS.PARAGRAPH]: (node, children) => {
//       const textContent = node.content.map(item => item.value).join(''); // Combine all text parts
    
//       // Check for custom markers for code
//       if (textContent.includes('[[code]]') && textContent.includes('[[*code]]')) {
//         const codeText = textContent
//           .replace('[[code]]', '')
//           .replace('[[*code]]', '')
//           .trim(); // Extract and clean the code
//         return (
//           <pre className={styles.codeBlock}>
//             <code>{codeText}</code>
//           </pre>
//         );
//       }

//       if (textContent.includes('[[where]]') && textContent.includes('[[*where]]')) {
//         const codeText = textContent
//           .replace('[[where]]', '')
//           .replace('[[*where]]', '')
//           .trim(); // Extract and clean the code
//         return (
//           <pre className={styles.whereBlock}>
//             <MathJax>{codeText}</MathJax>
//           </pre>
//         );
//       }
    
//       // Check if the content contains LaTeX mathematical formulas
//       if (textContent.includes('$$')) {
//         return (
//           <MathJax>
//             {textContent}
//           </MathJax>
//         );
//       }
    
//       return <p className="mb-4">{children}</p>; // Otherwise, treat it as normal text
//     },
//     'table': (node, children) => (
//       // Wrap the table in a div with the tableWrapper class only if the table exists
//       node && node.content && node.content.length > 0 ? (
//         <div className={styles.tableWrapper}>
//          <table className="min-w-full border rounded-md overflow-hidden">
//             <tbody>
//               {children}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         // If there is no table, render the children as-is
//         children
//       )
//     ),
//   },
// };

// export default function BlogPage({ blog, blogs }) {
//   const router = useRouter();
//   const {
//     title,
//     categories,
//     description,
//     coverImage,
//     date,
//     author,
//     blogContent,
//     slug,
//     faqs,
//     modifiedOn
//   } = blog;

//   const dateObject = new Date(date);

//   const monthName = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const year = dateObject.getFullYear();
//   const month = dateObject.getMonth(); 
//   const day = dateObject.getDate();

//   return (
//     <div className={styles.head1}>
//       <Head>
//         <title>{`${title} | Blog | Xbattery`}</title>
//         <meta name="description" content={description} />
//         <meta
//           property="og:image"
//           content={`https:${coverImage.fields.file.url}`}
//         />
//         <meta property="og:site_name" content="Xbattery" />
//         <meta property="og:title" content={title} />
//         <meta property="og:type" content="article" />
//         <meta property="og:url" content={`https://xbattery.energy/blog/${slug}`} />
//         <meta property="article:published_time" content={date} />
//         <meta property="article:modified_time" content={modifiedOn} />
//         <link rel="canonical" href={`https://xbattery.energy/blog/${slug}`} />
//       </Head>

//       <MathJaxContext>
//         {/* Spotlight section similar to the example */}
//         <div className={styles.spotlight}>
//           <div className="max-w-4xl mx-auto">
//             <div className="mb-1 font-medium uppercase text-green-200">ENERGY SPOTLIGHT</div>
//             <h1 className={styles.spotlightTitle}>{title}</h1>
//             <div className={styles.spotlightSubtitle}>{`${monthName[month]} ${day}, ${year}`}</div>
            
//             <div className={styles.shareIcons}>
//               <button className={styles.shareIcon} aria-label="Share on Facebook">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                 </svg>
//               </button>
//               <button className={styles.shareIcon} aria-label="Share on Twitter">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
//                 </svg>
//               </button>
//               <button className={styles.shareIcon} aria-label="Share on LinkedIn">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                   <rect x="2" y="9" width="4" height="12"></rect>
//                   <circle cx="4" cy="4" r="2"></circle>
//                 </svg>
//               </button>
//               <button className={styles.shareIcon} aria-label="Share via Email">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
//                   <polyline points="22,6 12,13 2,6"></polyline>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
      
//         <div className={styles.container}>
//           <div className={styles.affBackButton} onClick={()=>router.push("/media")}>
//             <IoArrowBack /> <p>Back to Media</p>
//           </div>
          
//           <Image
//             src={"https:" + coverImage.fields.file.url}
//             alt={coverImage.fields.title}
//             width={coverImage.fields.file.details.image.width}
//             height={coverImage.fields.file.details.image.height}
//             className={styles.coverImage}
//           />
          
//           <div className={styles.adDiv}>
//             <div className={styles.author}>{`By ${author}`}</div>
//             <GoDotFill className="text-xs text-green-700" />
//             <div className={styles.datee}>{`${monthName[month]} ${day}, ${year}`}</div>
//           </div>
          
//           <div className={styles.categories}>
//             {categories.map((category) => (
//               <span key={category} className={styles.category}>
//                 #{category}
//               </span>
//             ))}
//           </div>
          
//           <div className={styles.blogholder}>
//             <article className={styles.blog}>
//               {documentToReactComponents(blogContent, renderOption)}
//             </article>
//           </div>
//         </div>
        
//         <div className="h-px w-full max-w-4xl mx-auto bg-gray-200 my-16"></div>
//       </MathJaxContext>
     
//       <div className="bg-green-50 py-12">
//         <TopBlogs blogs={blogs} slug={slug}/>
//       </div>
//     </div>
//   );
// }







import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Head from "next/head";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";
import TopBlogs from "@/components/ui/TopBlogs";
import { MathJax, MathJaxContext } from 'better-react-mathjax';
import { Image } from "@chakra-ui/react";

// Import styles with proper naming to match the old code structure
import styles from "./slug.module.css";

// * fetch blogs from contentful CMS
async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "media" });
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
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const textContent = node.content.map(item => item.value).join(''); // Combine all text parts
    
      // Check for custom markers for code
      if (textContent.includes('[[code]]') && textContent.includes('[[*code]]')) {
        const codeText = textContent
          .replace('[[code]]', '')
          .replace('[[*code]]', '')
          .trim(); // Extract and clean the code
        return (
          <pre className={styles.codeBlock}>
            <code>{codeText}</code>
          </pre>
        );
      }

      if (textContent.includes('[[where]]') && textContent.includes('[[*where]]')) {
        const codeText = textContent
          .replace('[[where]]', '')
          .replace('[[*where]]', '')
          .trim(); // Extract and clean the code
        return (
          <pre className={styles.whereBlock}>
            <MathJax>{codeText}</MathJax>
          </pre>
        );
      }
    
      // Check if the content contains LaTeX mathematical formulas
      if (textContent.includes('$$')) {
        return (
          <MathJax>
            {textContent}
          </MathJax>
        );
      }
    
      return <p>{children}</p>; // Otherwise, treat it as normal text
    },
    'table': (node, children) => (
      // Wrap the table in a div with the tableWrapper class only if the table exists
      node && node.content && node.content.length > 0 ? (
        <div className={styles.tableWrapper}>
         <table>
            <tbody>
              {children}
            </tbody>
          </table>
        </div>
      ) : (
        // If there is no table, render the children as-is
        children
      )
    ),
  },
};

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: "media" });

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
    content_type: "media",
    "fields.slug": params.slug,
  });
  const currentBlog = res.items[0].fields;

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
    faqs
  } = currentBlog;
  
  const blogs = await fetchBlogs();
  let filteredBlogs = blogs.filter((blog) => {
    return blog.fields.slug !== currentBlog.slug;
  });
  
  filteredBlogs = filteredBlogs.map((blog) => ({
    title: blog.fields.title,
    thumbnail: blog.fields.thumbnail,
    categories: blog.fields.categories,
    slug: blog.fields.slug,
  }));

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
        faqs: faqs ? faqs : null,
        modifiedOn
      },
      blogs: filteredBlogs,
    },
  };
}

export default function BlogPage({ blog, blogs }) {
  const router = useRouter();
  const {
    title,
    categories,
    description,
    coverImage,
    date,
    author,
    blogContent,
    slug,
    faqs,
    modifiedOn
  } = blog;

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

  return (
    <div className={styles.head1}>
      <Head>
        <title>{`${title} | Blog | Xbattery`}</title>
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https:${coverImage.fields.file.url}`}
        />
        <meta property="og:site_name" content="Xbattery" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://xbattery.energy/blog/${slug}`} />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={modifiedOn} />
        <link rel="canonical" href={`https://xbattery.energy/blog/${slug}`} />
        {faqs && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqs)
            }}
          />
        )}
      </Head>

      <MathJaxContext>
        {/* Green spotlight section */}
        <div className="bg-[#1e1e1e] text-white py-10 px-6  mb-8 shadow-lg relative ">
        <div className={styles.affBackButton} onClick={() => router.push("/media")}>
            <IoArrowBack /> <p>Back</p>
        </div>
          <div className="xs:w-[95%] md:w-[70%] 2xl:w-[55%] mx-auto">
            <div className="mb-1 font-medium uppercase text-[#e4e4e4]"> {categories.map((category) => (
              <span key={category} >
                #{category}
              </span>
            ))}</div>
            <h1 className="text-xl md:text-3xl 2xl:text-4xl  font-bold mb-2">{title}</h1>
            <div className="text-xl mb-4">{`${monthName[month]} ${day}, ${year}`}</div>
           
          </div>
          <div className={styles.container1}>
          <Image
            src={"https:" + coverImage.fields.file.url}
            alt={coverImage.fields.title}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
            className={`${styles.coverImage} absolute top-[0rem]`}
          />
          </div>
        </div>
      
        <div className={styles.container}>
         
         
          
      
          
          {/* Image with same width handling as in old code */}
          <Image
            src={"https:" + coverImage.fields.file.url}
            alt={coverImage.fields.title}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
            className={`${styles.coverImage} `}
          />
          
          <div className={styles.blogholder}>
            <article className={styles.blog} style={{ marginTop: "-6rem" }}>
              {documentToReactComponents(blogContent, renderOption)}
            </article>
          </div>
        </div>
        
        {/* <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[5rem] mb-[6rem]"></div> */}
      </MathJaxContext>
     
      {/* <div >
        <TopBlogs blogs={blogs} slug={slug}/>
      </div> */}
    </div>
  );
}