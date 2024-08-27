import { Image } from '@chakra-ui/react';
import Link from "next/link";
import styles from "./card.module.css";
import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

export default function PdfCard({ blog }) {
  const { title, thumbnail, slug } = blog;
  return (
    <div
    >
      <Link href={`/whitepapers/${slug}`} className={styles.link}>
        <div className={styles.card}>
          <Image
            src={"https:" + thumbnail.fields.file.url}
            alt="Thumbnail Image"
            width={thumbnail.fields.file.details.image.width}
            height={500}
          />
          <div className={styles.content}>
            <div className={styles.title}>
              {/* {title.length >= 35 ? `${title.substring(0, 60)}...` : title} */}
              {title}
            </div>
          </div>
          <div className='p-4 '>
          <div className='flex gap-1 items-center border-[1px] border-[#6c6c6c] w-[130px] justify-center p-2 rounded-md hover:bg-[#dedede]'>
          <div className=' font-semibold '>
           Read more 
           </div>
           <FiArrowDownRight />
           </div>
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
    </div>
  );
}
