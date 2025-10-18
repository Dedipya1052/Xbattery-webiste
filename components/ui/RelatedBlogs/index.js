import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Card from "@/components/ui/TopCard";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function RelatedBlogs({ blogs = [], slug }) {
  const [shuffledBlogs, setShuffledBlogs] = useState([]);

  useEffect(() => {
    // Only process if blogs is an array and has content
    if (blogs && Array.isArray(blogs) && blogs.length > 0) {
      const newBlogs = [...blogs];
      shuffleArray(newBlogs);
      setShuffledBlogs(newBlogs);
    }
  }, [blogs, slug]);

  const randomThreeBlogs = shuffledBlogs.slice(0, 3);

  // Don't render if no blogs available
  if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
    return null;
  }

  return (
    <main className={styles.wrapper}>
      <h3 className={styles.bloghead}>Related articles</h3>
      <div className={styles.card_grid}>
        {randomThreeBlogs.map((blog, i) => (
          <Card key={i} blog={blog} />
        ))}
      </div>
    </main>
  );
}
