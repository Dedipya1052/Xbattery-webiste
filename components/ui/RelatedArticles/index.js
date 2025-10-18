import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function RelatedArticles({ articles = [], currentSlug }) {
  const [shuffledArticles, setShuffledArticles] = useState([]);

  useEffect(() => {
    // Only process if articles is an array and has content
    if (articles && Array.isArray(articles) && articles.length > 0) {
      const newArticles = [...articles];
      shuffleArray(newArticles);
      setShuffledArticles(newArticles);
    }
  }, [articles, currentSlug]);

  const randomThreeArticles = shuffledArticles.slice(0, 3);

  // Don't render if no articles available
  if (!articles || !Array.isArray(articles) || articles.length === 0) {
    return null;
  }

  // Determine grid class based on number of articles
  const getGridClass = () => {
    if (randomThreeArticles.length === 1) {
      return `${styles.card_grid} ${styles.single_card}`;
    } else if (randomThreeArticles.length === 2) {
      return `${styles.card_grid} ${styles.two_cards}`;
    }
    return styles.card_grid;
  };

  return (
    <main className={styles.wrapper}>
      <h3 className={styles.bloghead}>Related articles</h3>
      <div className={getGridClass()}>
        {randomThreeArticles.map((article, i) => (
          <motion.div
            key={i}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link href={article.link} className={styles.link}>
              <div className={styles.card}>
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  width={400}
                  height={250}
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.content}>
                  <div className={styles.title}>
                    {article.title.length > 35 ? `${article.title.substring(0, 60)}...` : article.title}
                  </div>
                </div>
                <div className={styles.categories}>
                  {article.categories && article.categories.slice(0,2).map((category) => (
                    <span key={category} className={styles.category}>
                      #{category}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
