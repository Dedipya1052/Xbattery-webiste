import { useRef, useEffect, useState } from 'react';
import styles from "./video.module.css";

const VideoComponent = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Store the current ref value in a local variable
    const currentVideoRef = videoRef.current; 

    const handlePlayPause = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        currentVideoRef.play();
        setIsVisible(true); // Show gradient overlay when video is in view
      } else {
        currentVideoRef.pause();
        setIsVisible(false); // Hide gradient overlay when video is out of view
      }
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      root: null, // viewport
      threshold: 0.5, // 50% in view 
    });

    if (currentVideoRef) {
      observer.observe(currentVideoRef);
    }

    return () => {
      if (currentVideoRef) {
        observer.unobserve(currentVideoRef);
      }
    };
  }, []); // Dependencies remain empty since we're only using a stable ref value

  return (
    <div className={styles.videoContainer}>
      <video
        ref={videoRef}
        width="100%"
        autoPlay
        loop
        muted
      >
        <source src="/videos/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className={`${styles.gradientOverlay} ${isVisible ? styles.overlayVisible : ''}`}
      ></div>
    </div>
  );
};

export default VideoComponent;

