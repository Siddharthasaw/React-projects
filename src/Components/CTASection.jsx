import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

const CTASection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3b6ea5",
        color: "#fff",
        textAlign: "center",
        padding: "50px 20px",
        borderRadius: "10px",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        maxWidth: "900px",
        margin: { xs: "40px 20px ", md: "40px auto" },
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize:{xs:"25px", md:"35px"}}}>
     <AutoGraphIcon sx={{width:"50px"}}/> Start Your Forex Journey Today!
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Get expert insights, top broker reviews, and the best trading bots to maximize your profits.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#fff",
          color: "#0e5094",
          fontWeight: "bold",
          padding: "10px 20px",
          "&:hover": { backgroundColor: "#758ab4", color:"#fff" },
        }}
      >
        Get Started 🚀
      </Button>
    </Box>
  );
};

export default CTASection;