import React, { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/router';
import styles from "./styles.module.css";
import { Button } from '@chakra-ui/react'; // Assuming you're using Chakra UI for Button styling

const EnergyStorageApplications = () => {
  const router = useRouter();
  const [currentBlogIndex, setCurrentBlogIndex] = useState(null);

  const energyStorage = [
    { name: "Battery Energy Storage System", link: "/learn/battery-energy-storage-systems" },
    { name: "Energy Storage Applications", link: "/learn/understanding-energy-storage-applications" },
  ];

  const renewableEnergy = [
    { name: "Solar Energy", link: "/learn/solar-energy" },
    { name: "Wind Energy", link: "/learn/wind-energy" },
  ];

  const electricVehicles = [
    { name: "EV vs ICE Costs", link: "/learn/ev-vs-ice-costs" },
    { name: "Charging Infrastructure", link: "/learn/ev-charging-infrastructure" },
  ];

  const electricity = [
    { name: "India’s Electricity Sector", link: "/learn/indias-electricity-sector" },
    { name: "Tariffs and PPA’s", link: "/learn/tariffs-ppas" },
  ];

  const grid = [
    { name: "Renewable Integration", link: "/learn/renewable-integration" },
    { name: "Smart Grid", link: "/learn/smart-grid" },
  ];

  const batteries = [
    { name: "Understanding Lithium", link: "/learn/understanding-lithium" },
    { name: "Emerging Battery Technologies", link: "/learn/emerging-battery-technologies" },
  ];

  const allBlogs = [
    {
      name: "Energy storage",
      link: "/learn/energy-storage",
    },
    ...energyStorage,
    {
      name: "Renewable energy",
      link: "/learn/renewable-energy",
    },
    ...renewableEnergy,
    {
      name: "Electricity",
      link: "/learn/electricity",
    },
    ...electricity,
    {
      name: "Electric Vehicles",
      link: "/learn/electric-vehicles",
    },
    ...electricVehicles,
    {
      name: "Batteries",
      link: "/learn/batteries",
    },
    ...batteries,
    {
      name: "Grid",
      link: "/learn/grid",
    },
    ...grid,
  ];

  useEffect(() => {
    // Find the current blog index based on the current path
    const currentPath = router.asPath; // Get the current path
    const currentIndex = allBlogs.findIndex((blog) => blog.link === currentPath);

    if (currentIndex !== -1) {
      setCurrentBlogIndex(currentIndex);
    }
  }, [router.asPath]); // Re-run this effect when the route changes

  // Get the previous and next blogs based on the current index
  const prevBlog = currentBlogIndex > 0 ? allBlogs[currentBlogIndex - 1] : null;
  const nextBlog = currentBlogIndex < allBlogs.length - 1 ? allBlogs[currentBlogIndex + 1] : null;

  return (
    <div className={styles.container}>
      <div className={styles.affBackButton} onClick={() => router.push("/learn")}>
        <IoArrowBack /> <p>Back</p>
      </div>

      <div className="flex items-center justify-center text-center pt-[6rem] pb-[6rem]">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Coming Soon!</h1>
          <p className="text-xl text-gray-600 mt-4">
            We're working hard to bring you something awesome. Stay tuned!
          </p>
        </div>
      </div>

      {/* Next and Previous buttons */}
      {currentBlogIndex !== null && (
        <div
          className={`flex ${prevBlog && nextBlog ? "justify-between" : "justify-center"} mt-[6rem] mb-[-3.5rem] flex-wrap gap-[1.2rem] sm:gap-0`}
        >
          {prevBlog && (
            <Button
              onClick={() => router.push(prevBlog.link)}
              bg="white"
              color="black"
              border="1px solid #000"
              _hover={{ color: "rgb(42, 193, 42)" }}
            >
              Previous: {prevBlog.name}
            </Button>
          )}
          {nextBlog && (
            <Button
              onClick={() => router.push(nextBlog.link)}
              bg="white"
              color="black"
              border="1px solid #000"
              _hover={{ color: "rgb(42, 193, 42)" }}
            >
              Next: {nextBlog.name}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default EnergyStorageApplications;
