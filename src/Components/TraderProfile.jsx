import React from "react";
import { Box, Typography, Button, Avatar, LinearProgress, Grid , Container} from "@mui/material";
import { Facebook, Twitter, YouTube } from "@mui/icons-material";

const TraderProfile = () => {
  const skills = [
    { name: "Risk Management", value: 87 },
    { name: "Technical Analysis", value: 90 },
    { name: "Fundamental Analysis", value: 78 },
    { name: "Trading Psychology", value: 85 },
  ];

  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding  : "100px 0px 100px 0px" }}> 

            
            <Container >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Image & Contact */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          <Avatar
            src="https://via.placeholder.com/150" // Replace with real image
            sx={{ width: 150, height: 150, margin: "auto", mb: 2, border: "4px solid #3b6ea5", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3b6ea5" }}>
            Professional Trader & Market Analyst
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
            <Facebook sx={{ color: "#3b6ea5", cursor: "pointer", "&:hover": { color: "#1a73e8" } }} />
            <Twitter sx={{ color: "#3b6ea5", cursor: "pointer", "&:hover": { color: "#1a73e8" } }} />
            <YouTube sx={{ color: "#ff0000", cursor: "pointer", "&:hover": { color: "#cc0000" } }} />
          </Box>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Contact Me
          </Button>
        </Grid>
        
        {/* Right Section - About & Skills */}
        <Grid item xs={12} md={8}>
          <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
            An experienced trader specializing in Forex and Crypto markets. With a deep
            understanding of risk management and technical strategies, I help traders navigate
            volatile markets with confidence. My expertise lies in executing high-probability
            trades, market analysis, and optimizing trading psychology.
          </Typography>
          {skills.map((skill) => (
            <Box key={skill.name} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "#3b6ea5" }}>{skill.name}</Typography>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{ height: 8, borderRadius: 1, backgroundColor: "#e0e0e0", "& .MuiLinearProgress-bar": { backgroundColor: "#3b6ea5" } }}
              />
              <Typography variant="caption" sx={{ float: "right", fontWeight: "bold", color: "#3b6ea5" }}>{skill.value}%</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
      </Container>
    </Box>
  );
};

export default TraderProfile;