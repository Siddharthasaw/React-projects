import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import image1 from "../assets/testimonial_images/image.png"; // Replace with your actual image path

const blogData = [
  {
    id: 1,
    title: "Copa America: Luis Suarez from devastated US",
    date: "March 26, 2020",
    category: "TECHNOLOGY",
    image: image1,
    content: "Full blog details about Copa America...",
  },
  {
    id: 2,
    title: "Cheap smartphone sensor could help you",
    date: "March 26, 2020",
    category: "TECHNOLOGY",
    image: "https://via.placeholder.com/300",
    content: "Detailed blog post about smartphone sensor...",
  },
  {
    id: 3,
    title: "Smartphone sensor: A game changer",
    date: "March 26, 2020",
    category: "TECHNOLOGY",
    image: "https://via.placeholder.com/300",
    content: "Smartphone sensor revolution...",
  },
  {
    id: 4,
    title: "Latest innovations in AI",
    date: "March 26, 2020",
    category: "TECHNOLOGY",
    image: "https://via.placeholder.com/300",
    content: "AI is changing the world...",
  },

  {
    id: 5,
    title: "Latest innovations in AI",
    date: "March 26, 2020",
    category: "TECHNOLOGY",
    image: "https://via.placeholder.com/300",
    content: "AI is changing the world...",
  },

  {
    id: 6,
    title: "Latest innovations in AI",
    date: "March 26, 2020",
    category: "TECHNOLOGY",
    image: "https://via.placeholder.com/300",
    content: "AI is changing the world...",
  },

  {
    id: 7,
    title: "Latest innovations in AI",
    date: "March 26, 2020",
    category: "TECHNOLOGY",
    image: "https://via.placeholder.com/300",
    content: "AI is changing the world...",
  },

  {
    id: 8,
    title: "Latest innovations in AI",
    date: "March 26, 2020",
    category: "TECHNOLOGY",
    image: "https://via.placeholder.com/300",
    content: "AI is changing the world...",
  },
];

export default function BlogCard() {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ padding: "60px 0 60px 0" }}>
        <Grid container spacing={3} sx={{ padding: 3 }}>
          {blogData.map((blog) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={blog.id}>
              <Link
                to={`/blog/${blog.id}`}
                state={blog}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.image}
                    alt={blog.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "bold",
                        color: "#0073e6",
                        textTransform: "uppercase",
                      }}
                    >
                      {blog.category} | {blog.date}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        marginTop: 1,
                      }}
                    >
                      {blog.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
