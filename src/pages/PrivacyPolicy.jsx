import React from "react";
import { Box, Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "50px 0" }}>
      <Container maxWidth="md" sx={{ backgroundColor: "white", padding: "20px" }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", color: "#3b6ea5" }}>
          Privacy Policy
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Introduction
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Welcome to our Privacy Policy page. When you use our web site services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. This is important; we hope you will take time to read it carefully.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Information Collection
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We collect information to provide better services to all our users. We collect information in the following ways: Information you give us. For example, our services require you to sign up for an account. When you do, we’ll ask for personal information, like your name, email address, telephone number or credit card.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Use of Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We use the information we collect from all of our services to provide, maintain, protect and improve them, to develop new ones, and to protect our users. We also use this information to offer you tailored content – like giving you more relevant search results and ads.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Sharing of Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We do not share personal information with companies, organizations and individuals outside of our company unless one of the following circumstances applies: With your consent. We will share personal information with companies, organizations or individuals outside of our company when we have your consent to do so.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Security
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure or destruction of information we hold. In particular: We encrypt many of our services using SSL. We offer you two step verification when you access your account. We review our information collection, storage and processing practices, including physical security measures, to guard against unauthorized access to systems.
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Changes to This Policy
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Our Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We will post any privacy policy changes on this page and, if the changes are significant, we will provide a more prominent notice (including, for certain services, email notification of privacy policy changes).
        </Typography>
        
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Contact Information
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          If you have any questions about this Privacy Policy, please contact us at mql5helpline@gmail.com.
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
