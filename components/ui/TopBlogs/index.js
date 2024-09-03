// import Card from "@/components/BlogCard/BlogCard";
// import Card from "@/components/BlogCard/BlogCard";
import Card from "../TopCard";
import styles from "./topblogs.module.css";
import { useEffect, useState } from "react";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function TopBlogs({ blogs, slug }) {
  const [shuffledBlogs, setShuffledBlogs] = useState([...blogs]);

  useEffect(() => {
    // Shuffle the array when the component mounts
    setShuffledBlogs((prevBlogs) => {
      const newBlogs = [...prevBlogs];
      shuffleArray(newBlogs);
      return newBlogs;
    });
  }, [slug]);

  const randomThreeBlogs = shuffledBlogs.slice(0, 3);

  return (
    <main className={styles.wrapper}>
      <h3 className={styles.bloghead}>Related blogs</h3>
      <div className={styles.card_grid}>
        {randomThreeBlogs.map((blog, i) => (
          <Card key={i} blog={blog} />
        ))}
      </div>
    </main>
  );
}
