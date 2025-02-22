import React from "react";
import { Box, Container,  Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Pinterest, Instagram, YouTube, Telegram } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", padding: "40px 0" }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center" size={16} >
          {/* Left Section */}
          <Grid item  size={{xs:12, sm:6, md:4}}>
           <Link to="/"><img src={Logo} alt="Logo" style={{ height: "50px", width: "150px", objectFit: "contain" }} /></Link> 
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              The small round table in the dinette may be great for casual me.
            </Typography>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <IconButton sx={{ color: "#fff" }}><Facebook /></IconButton>
              <IconButton sx={{ color: "#fff" }}><Twitter /></IconButton>
              <IconButton sx={{ color: "#fff" }}><Pinterest /></IconButton>
              <IconButton sx={{ color: "#fff" }}><Instagram /></IconButton>
            </Box>
          </Grid>

          {/* Middle Section - Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Company</Typography>
            <Link to='/' style={{textDecoration:"none", color:"white"}}><Typography>Home</Typography></Link>
            <Link to='/about' style={{textDecoration:"none", color:"white"}}><Typography>About</Typography></Link>
            <Link to='/blog' style={{textDecoration:"none", color:"white"}}><Typography>Market News</Typography></Link>
            <Link to='/contact' style={{textDecoration:"none", color:"white"}}><Typography>Contact Us</Typography></Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Policies</Typography>
            <Link to="/privacy-policy" style={{textDecoration:"none", color:"white"}}><Typography>Privacy Policy</Typography></Link>
            <Link to='/terms-conditions' style={{textDecoration:"none", color:"white"}}><Typography to>Terms & Conditions</Typography></Link>
            <Link to="/risk-disclaimer" style={{textDecoration:"none", color:"white"}}><Typography>Risk Disclaimer</Typography></Link>
            <Link to="/support-center" style={{textDecoration:"none", color:"white"}}> <Typography>Support Center</Typography></Link>
          </Grid>

          {/* Right Section - Contact */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">Contact</Typography>
            <Typography sx={{ color: "#FFA500", fontWeight: "bold" }}>+08 9229 8228</Typography>
            <Typography>Email: mql5helpline@gmail.com</Typography>
            <Box sx={{ display: "flex", gap: 1, marginTop: 2 }}>
              <IconButton sx={{ backgroundColor: "#0088cc", color: "#fff" }}><Telegram /></IconButton>
              <IconButton sx={{ backgroundColor: "#FF0000", color: "#fff" }}><YouTube /></IconButton>
              <IconButton sx={{ backgroundColor: "#333", color: "#fff" }}><Instagram /></IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright Section */}
        <Typography align="center" sx={{ marginTop: "20px", borderTop: "1px solid #333", paddingTop: "10px" }}>
          © MQL5 Software. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
