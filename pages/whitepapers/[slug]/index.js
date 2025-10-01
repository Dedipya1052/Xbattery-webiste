import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import styles from "./slug.module.css";
import Head from "next/head";
//import TopBlogs from "@/components/TopBlogs";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
// import { FAQPageJsonLd } from 'next-seo';
import { Button, Image, useDisclosure } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/router";
import Card from "@/components/ui/BlogCard/BlogCard";
import TopBlogs from "@/components/ui/TopBlogs";
import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  FormControl,
  FormLabel,
  SimpleGrid,
} from "@chakra-ui/react";

// * fetch blogs from contentful CMS
async function fetchBlogs() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "whitepaper" });
  return res.items;
}

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      if (
        node.data.target.fields.file.contentType === "image/jpeg" ||
        node.data.target.fields.file.contentType === "image/png" ||
        node.data.target.fields.file.contentType === "image/gif"
      ) {
        return (
          <Image
            src={`https:${node.data.target.fields.file.url}`}
            alt="BlogImage"
            height={node.data.target.fields.file.details.image.height}
            width={node.data.target.fields.file.details.image.width}
            className={styles.embeddedImage}
          />
        );
      } else if (
        node.data.target.fields.file.contentType === "application/pdf"
      ) {
        const pdfUrl = `https:${node.data.target.fields.file.url}`;
        return (
          <div className={styles.pdfContainer}>
            <iframe
              src={pdfUrl}
              title="Whitepaper PDF"
              width="100%"
              height="500px"
            ></iframe>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              aria-label="Download whitepaper PDF"
              className={styles.iconDownload}
            >
              {/* icon-only download button; styled via CSS module */}
              ⬇
            </a>
          </div>
        );
      } else {
        // Handle unsupported file types gracefully (optional)
        return <p>Unsupported file type</p>;
      }
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
  const res = await client.getEntries({ content_type: "whitepaper" });

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
    content_type: "whitepaper",
    "fields.slug": params.slug,
  });
  const currentBlog = res.items[0].fields;

  //console.log(currentBlog);
  const { title, coverImage, blogContent, slug, pdf,previewImage } = currentBlog;
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
    // categories: blog.fields.categories,
    slug: blog.fields.slug,
    pdf: blog.fields.pdf,
    previewImage:blog.fields.previewImage,
  }));

  //console.log({blogs});
  return {
    props: {
      blog: {
        title,
        coverImage,
        blogContent,
        slug,
        pdf,
        previewImage
        // faqs : faqs?faqs:null
      },
      blogs: filteredBlogs,
    },
  };
}

export default function BlogPage({ blog, blogs }) {
  //console.log(blog)
  //console.log("blogs : ",blogs);

  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showButton, setShowButton] = useState(false);

  const {
    title,

    coverImage,

    blogContent,
    pdf,
    previewImage
  } = blog;

  // console.log("pdf : ",pdf.fields.file.url );

  async function sendDataToAPI(name, email) {
    try {
      const response = await fetch("https://a70b67b1955ee7fba12198dd1cf2e2.db.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/63109b2b69a04bda85ee3ea595bc36e4/triggers/manual/paths/invoke/?api-version=1&tenantId=tId&environmentName=a70b67b1-955e-e7fb-a121-98dd1cf2e2db&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=EtL1xsjVb5Udu_WFzB-fvdlhHY2P42MyEctq1aM_ehI", {
        method: "POST", // Use POST method
        headers: {
          "Content-Type": "application/json", // Send JSON data
        },
        body: JSON.stringify({ name, email }), // Convert name and email to JSON
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      //console.log(response);
      

      // const data = await response.json();
      // console.log("Document inserted successfully:", data);
    } catch (error) {
      console.error("Error inserting document:", error);
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (isFormComplete) {
      try {
        // Call the API function to send the data
        await sendDataToAPI(formData.name, formData.email);
        console.log("Form submitted:", formData);

        // Show button or any success action
        setShowButton(true);

        onClose();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const isFormComplete = formData.name && formData.email;

  // useEffect(() => {
  //   // Extract and inject styles from the animation code
  //   const styleMatch = animation.match(/<style[^>]*>([\s\S]*?)<\/style>/);
  //   if (styleMatch) {
  //     const styleElement = document.createElement('style');
  //     styleElement.innerHTML = styleMatch[1];
  //     document.head.appendChild(styleElement);

  //     // Cleanup function to remove the style element
  //     return () => {
  //       if (document.head.contains(styleElement)) {
  //         document.head.removeChild(styleElement);
  //       }
  //     };
  //   }
  // }, [animation]);

  // Extract the HTML content without the <style> tag
  //const contentMatch = animation.replace(/<style[^>]*>([\s\S]*?)<\/style>/, '');

  // console.log("blog deatils : ",blog);

  // console.log("faqs: ",faqs);

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
  // const hours = dateObject.getHours();
  // const minutes = dateObject.getMinutes();
  // const seconds = dateObject.getSeconds();

  return (
    <div className={styles.head1}>
      <Head>
        <title>{`${title} | Whitepapers | Xbattery`}</title>
        <meta
          property="og:image"
          content={`https:${coverImage.fields.file.url}`}
        />
         <meta property="og:type" content="article" />
        {/* <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https:${coverImage.fields.file.url}`}
        />
        <meta property="og:site_name" content="Alter AI" />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://getalter.ai/blog/${slug}`} />
        <meta property="article:published_time" content={date} />
       
        <link rel="canonical" href={`https://getalter.ai/blog/${slug}`} /> */}
      </Head>
      {/* { faqs.length>0 &&
      <FAQPageJsonLd
          mainEntity={faqs}
      />
      } */}
      <div className={styles.container}>
        {/* <div className={styles.affBackButton} onClick={()=>router.push("/whitepapers")}> <IoArrowBack /> <p>Back</p></div> */}
        <div className={styles.mainDiv}>
         <div className={styles.mainDiv1}>
          <h1 className={`${styles.title} font-semibold`}>{title}</h1>
          <Image
            src={"https:" + coverImage.fields.file.url}
            alt={coverImage.fields.title}
            width={coverImage.fields.file.details.image.width}
            height={coverImage.fields.file.details.image.height}
            className={styles.coverImage}
          />
          </div>
        </div>
        <div className="mt-[2rem] w-[95%] md:w-[80%] 2xl:w-[1450px] mx-auto flex md:flex-row flex-col md:gap-2">
          <div className={styles.blogholder}>
            <article className={styles.blog} style={{ marginTop: "1rem" }}>
              {documentToReactComponents(blogContent, renderOption)}
            </article>
          </div>
          <div className={styles.pdfBlock}>
            {/* <div className="relative w-full h-[85%]">
              <iframe
                src={pdf.fields.file.url}
                title="Whitepaper PDF"
                className="w-full h-full border-none"
              ></iframe>
              <div className="absolute top-1 left-[1%] w-[98%] h-12 bg-white flex items-center justify-center z-10 font-bold">
                Whitepaper
              </div>
            </div> */}
            <Image
            src={"https:" + previewImage.fields.file.url}
            alt={previewImage.fields.title}
            width={previewImage.fields.file.details.image.width}
            height={previewImage.fields.file.details.image.height}
            className={styles.previewImage}
          />
            <div className="mt-[3rem] flex justify-center">
              {showButton ? (
                <a
                  href={pdf.fields.file.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  aria-label="View whitepaper PDF"
                  className={styles.iconDownload}
                >
                  ⬇
                </a>
              ) : (
                <div className={styles.iconDownload} onClick={onOpen} aria-label="Open download form">
                  ⬇
                </div>
              )}
            </div>  
          </div>
        </div>

       


       
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#f6f6f6">
          <ModalHeader>Download Your Free Copy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={1} spacing={4}>
              {/* First row with First Name and Last Name */}
              <FormControl isRequired>
                <FormLabel fontSize="sm"> Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              {/* <FormControl isRequired>
                <FormLabel fontSize="sm">Last Name</FormLabel>
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </FormControl> */}
            </SimpleGrid>
            {/* Second row with Email */}
            <FormControl isRequired mt={4}>
              <FormLabel fontSize="sm">Email</FormLabel>
              <Input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"center"}>
            {" "}
            <div className="flex justify-center">
              {" "}
              <Button colorScheme="blue" mr={3} onClick={handleSubmit} isDisabled={!isFormComplete} p={0} minW="0" h="48px" w="48px" borderRadius="12px" aria-label="Download whitepaper">
                <a href={pdf.fields.file.url} target="_blank" rel="noopener noreferrer" download style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>⬇</a>
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <div className="bg-black h-[0.7px] w-[90%] mx-auto mt-[5rem] mb-[6rem]"></div> */}

      {/* <TopBlogs blogs={blogs} slug={slug}/> */}
    </div>
  );
}
