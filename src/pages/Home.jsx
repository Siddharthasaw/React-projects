import React from "react";
import Banner from "../Components/Banner";
import Ticker from "../Components/Ticker";
import BlogCard from "../Components/BlogCard";
import Testimonials from "../Components/Testimonials";
import PrivacyPolicy from "./PrivacyPolicy";



const Home = () => {
  return (
    <>
      
      <Ticker />
      <BlogCard />
      <Testimonials />
    </>
  );
};

export default Home;
