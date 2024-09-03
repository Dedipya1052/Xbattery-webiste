import { useRef, useEffect, useState } from 'react';
import styles from "./video.module.css"

const VideoComponent = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handlePlayPause = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        videoRef.current.play();
        setIsVisible(true); // Show gradient overlay when video is in view
      } else {
        videoRef.current.pause();
        setIsVisible(false); // Hide gradient overlay when video is out of view
      }
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      root: null, // viewport
      threshold: 0.5, // 50% in view 
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);
  return (

     <div className={styles.videoContainer}>
      <video width="100%"
    // controls
    autoPlay
    loop
    muted>
      <source src="/videos/video1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
      {/* <video
        ref={videoRef}
        className={styles['video']}
        autoPlay
        loop
        muted
      >
        <source src="path_to_your_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div
        className={`${styles['gradientOverlay']} ${isVisible ? styles['overlayVisible'] : ''}`}
      ></div>
    </div>
  );
};

export default VideoComponent;
