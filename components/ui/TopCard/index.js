import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";
import { motion } from "framer-motion";

export default function Card({ blog }) {
  const { title, thumbnail, categories, slug } = blog;
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
            height={500}
          />
          <div className={styles.content}>
            <div className={styles.title}>
              {title.length > 35 ? `${title.substring(0, 60)}...` : title}
            </div>
          </div>
          <div className={styles.categories}>
            {categories
              .filter(category => {
                // Remove "Battery Management Systems (BMS)" tag from the "How AI is Shaping Safer EV Batteries" article
                if (title && title.toLowerCase().includes('how ai is shaping safer ev batteries')) {
                  return category !== 'Battery Management Systems (BMS)';
                }
                return true;
              })
              .slice(0,2).map((category) => (
              <span key={category} className={styles.category}>
                #{category}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
