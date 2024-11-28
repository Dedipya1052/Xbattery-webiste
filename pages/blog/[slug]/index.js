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
import { MathJax, MathJaxContext } from 'better-react-mathjax';




// * fetch blogs from contentful CMS
 async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "blog" });
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
  const res = await client.getEntries({ content_type: "blog" });

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
    content_type: "blog",
    "fields.slug": params.slug,
  });
  const currentBlog= res.items[0].fields;

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
    faqs
  } = currentBlog;
  // console.log({ blog: res.items });
  const blogs = await fetchBlogs();
  //console.log("initial blogs :",blogs.length);
  let filteredBlogs = blogs.filter((blog) => {
    return blog.fields.slug !== currentBlog.slug;
  });
  // console.log("filtered blogs :",filteredBlogs.length);
  filteredBlogs = filteredBlogs.map((blog) => ({
    title: blog.fields.title,
    thumbnail: blog.fields.thumbnail,
    categories: blog.fields.categories,
    slug: blog.fields.slug,
  }));

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
        faqs : faqs?faqs:null 
      },
      blogs:filteredBlogs,
    },
  };
}

export default function BlogPage({ blog,blogs}) {
  //console.log(blog)
  //console.log("blogs : ",blogs);
  const router=useRouter();
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
    faqs
  } = blog;

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
        {/* <meta property="article:modified_time" content={modifiedOn} /> */}
        <link rel="canonical" href={`https://xbattery.energy/blog/${slug}`} />
      </Head>
      {/* { faqs.length>0 &&
      <FAQPageJsonLd
          mainEntity={faqs}
      />
      } */}

      <MathJaxContext>
      
      <div className={styles.container}>
     <div className={styles.affBackButton} onClick={()=>router.push("/blog")}> <IoArrowBack /> <p>Back</p></div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.adDiv}>
          <div className={styles.author}>{`By ${author}`}</div>
          <div
            className={styles.datee}
          >{`${monthName[month]} ${day}, ${year}`}</div>
        </div>
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
      </div>
      <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[5rem] mb-[6rem]"></div>

      </MathJaxContext>
     
      <TopBlogs blogs={blogs} slug={slug}/>
    </div>
  );
}
