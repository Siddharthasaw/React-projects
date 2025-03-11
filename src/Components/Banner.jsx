import React from "react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import bannerImage from "../assets/Flexymarkets_banner.jpg"; // Replace with your actual image path

const Banner = () => {
    return (
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
        >
          <Box
            component="img"
            src={bannerImage}
            alt="Banner"
            sx={{ width: "100%", borderRadius: "10px", boxShadow: 3, margin: "8px auto" }}
          />
        </motion.div>
      </Container>
    );
  };
  
  export default Banner;
