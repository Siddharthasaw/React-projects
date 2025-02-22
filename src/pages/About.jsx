import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import candlaimage from "../assets/About_us.jpg";
import ContactForm from "../Components/ContactForm";
import TradeProfile from "../Components/TraderProfile"; // Import the TraderProfile component

function About() {
  return (
    <>
      <Box>
        <Container sx={{ display: "flex", flexDirection: { xs: "column", md: "row",}, alignItems: "center", padding:"100px 0px 100px 0px" }}>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center", mb: { xs: 4, md: 0 } }}>
            <img
              src={candlaimage}
              alt="About"
              style={{ width: "100%", maxWidth: "500px", borderRadius: 10, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
            />
          </Box>

          <Box sx={{ flex: 1, padding: { xs: 2, md: 4 } }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold", color: "#3b6ea5" }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea a neque voluptatum, fuga ratione, ullam corporis ad, aperiam consequuntur assumenda esse architecto suscipit accusantium beatae nemo! Dolores explicabo iure quis.
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Read More
            </Button>
          </Box>

          
        </Container>
        <TradeProfile />
        <ContactForm />
      </Box>

      
    </>
  );
}

export default About;
