import Link from "next/link";
import styles from "./BlogCard.module.css";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";

export default function Card({ blog }) {
  const { title, thumbnail, categories, slug, date, description, author,subtitle} = blog;
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
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link href={`/blog/${slug}`} className={styles.link}>
        <div className={styles.card}>
          <Image
            src={"https:" + thumbnail.fields.file.url}
            alt="Thumbnail Image"
            width={thumbnail.fields.file.details.image.width}
            objectFit={"cover"}
          />
          <div className={`flex flex-col gap-[1.1rem] ${styles.head1} border-b-[1px] pb-[2rem] border-black`}>
          <div className="mt-[1rem] flex flex-col gap-[2px]">
          <div className=" text-sm text-gray-700 font-[500]">{`Published ${monthName[month]} ${day}, ${year}`}</div>
          <div className=" text-sm text-gray-700 font-[500]">{author}</div>
          </div>
          <div className="text-[1.5rem] font-semibold">{subtitle}</div>

          <div className="text-[0.9rem] min-h-[6rem] ">{description}</div>

          </div>
          {/* <div className={styles.categories}>
            {categories.slice(0,2).map((category) => (
              <span key={category} className={styles.category}>
                #{category}
              </span>
            ))}
          </div> */}
        </div>
      </Link>
    </motion.div>
  );
}
