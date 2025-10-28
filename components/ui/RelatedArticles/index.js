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


  // Use standard grid class like blog page
  const getGridClass = () => {

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

                  {/* Special handling for IoT-Enabled Battery Monitoring article */}
                  {article.title?.toLowerCase().includes('iot-enabled battery monitoring') ? (
                    <span className={styles.category}>
                      #Internet of Things
                    </span>
                  ) : article.title?.toLowerCase().includes('cybersecurity threats in smart battery systems') ? (
                    <span className={styles.category}>
                      #Cybersecurity
                    </span>
                  ) : (
                    article.categories && article.categories
                      .filter(category => {
                        // Remove "Environmental Sustainability" tag from the specific EV environment article
                        if (article.title && article.title.toLowerCase().includes('understanding the impact of electric vehicles on the environment')) {
                          return category !== 'Environmental Sustainability';
                        }
                        // Remove "Battery Management Systems" tag from the BMS Architecture article
                        if (article.title && article.title.toLowerCase().includes('the complete guide to bms architecture')) {
                          return category !== 'Battery Management Systems';
                        }
                        // Remove "Battery Technology" tag from the Active vs Passive Cell Balancing article
                        if (article.title && article.title.toLowerCase().includes('active vs passive cell balancing')) {
                          return category !== 'Battery Technology';
                        }
                        // Remove "Smart Energy Management" tag from the Best Battery Management System article
                        if (article.title && article.title.toLowerCase().includes('best battery management system for lithium-ion batteries')) {
                          return category !== 'Smart Energy Management';
                        }
                        // Show only relevant tags for the BIS Standards article (filter out unwanted tags)
                        if (article.title && article.title.toLowerCase().includes('navigating bis standards for battery systems')) {
                          // Remove only "Energy Storage Safety" tag, allow "BIS Compliance Guidelines" and others
                          return category !== 'Energy Storage Safety';
                        }
                        // Remove "Renewable Energy Integration" tag from the Digital Twins article
                        if (article.title && article.title.toLowerCase().includes('digital twins for battery management')) {
                          return category !== 'Renewable Energy Integration';
                        }
                        // Remove "Digital Transformation in Energy" tag from the AI Battery Life Prediction article
                        if (article.title && article.title.toLowerCase().includes('how ai is revolutionizing battery life prediction')) {
                          return category !== 'Digital Transformation in Energy';
                        }
                        return true;
                      })
                      .slice(0,2).map((category) => (
                      <span key={category} className={styles.category}>
                        #{category}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </Link>
            

          </motion.div>
        ))}
      </div>
    </main>
  );
}
