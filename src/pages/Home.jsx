import React from "react";

import Ticker from "../Components/Ticker";
import BlogCard from "../Components/BlogCard";
import Testimonial from "../Components/Testimonials";
import CTASection from "../Components/CTASection";  // Import the CTASection component



const Home = () => {
  return (
    <>
      
      <Ticker />
      <BlogCard />  
      <Testimonial/>
      <CTASection /> {/* Add the CTASection component */} 
      
    </>
  );
};

export default Home;
