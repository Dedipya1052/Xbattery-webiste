import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const AnimatedDiv = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      //console.log('Div is in view');
    } else {
      //console.log('Div is out of view');
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: inView ? 0 : 100, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      //style={{ height: '200px', backgroundColor: 'lightblue', margin: '20px 0' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
