

import React from "react";
import { Box, Typography,  } from "@mui/material";
import BlogCard from "../Components/BlogCard";



const MarketNews = () => {
  return (
    
    <Box sx={{ p: 4, backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
        Read Our Latest Blogs
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
     
     <BlogCard />
    </Box>
    
  );
};

export default MarketNews;
