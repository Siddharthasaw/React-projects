import React from "react";
import { Container, Typography, Box } from "@mui/material";

const TermsConditions = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "50px 0" }}>
      <Container maxWidth="md" sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 3, padding: "20px" }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: "#3b6ea5" }}>
          Terms & Conditions
        </Typography>
        
        <Box sx={{ bgcolor: "background.paper", p: 3, borderRadius: 2, boxShadow: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            1. Introduction
          </Typography>
          <Typography paragraph>
            Welcome to our website. By accessing our platform, you agree to comply with our terms
            and conditions. Please read them carefully before using our services.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            2. User Responsibilities
          </Typography>
          <Typography paragraph>
            Users must ensure that they provide accurate information and use our services legally.
            Any misuse or unauthorized access may result in termination of services.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            3. Intellectual Property Rights
          </Typography>
          <Typography paragraph>
            All content, logos, and intellectual property on this website belong to us. You may
            not reproduce or distribute any material without our consent.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            4. Limitation of Liability
          </Typography>
          <Typography paragraph>
            We are not responsible for any damages resulting from the use of our website. Users
            must use our platform at their own risk.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            5. Amendments
          </Typography>
          <Typography paragraph>
            We reserve the right to update these terms at any time. Continued use of our services
            implies acceptance of the revised terms.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsConditions;
