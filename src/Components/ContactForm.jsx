
import React from "react";
import { Box, Button, Grid, TextField, Typography,Container } from "@mui/material";
import image from "../assets/contact_left_image.png"; // Replace with your actual image path

function ContactForm() {
    return(

        <>
             <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
        p: 2,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {/* Left Side - Image */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={image}
              alt="Laptop and Phone"
              style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }}
            />
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Contact Us
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField fullWidth label="Email *" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Name *" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Address *" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message *"
                  variant="outlined"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ textTransform: "none" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
        </>
    )
}

export default ContactForm;