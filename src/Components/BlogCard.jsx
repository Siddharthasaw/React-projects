import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import { createSlug } from "../Components/slugify"; // Import createSlug function
import blogData from "../data/data"; // Import the blog data

export default function BlogCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(blogData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = blogData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5; // Maximum number of page numbers to show
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    if (endPage - startPage + 1 < maxPageNumbersToShow) {
      startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          variant={i === currentPage ? "contained" : "outlined"}
          sx={{ mx: 1 }}
        >
          {i}
        </Button>
      );
    }

    return pageNumbers;
  };

  return (
    <Box>
      <Container maxWidth="lg" sx={{ padding: "60px 0 60px 0" }}>
        <Grid container spacing={3} sx={{ padding: 3 }}>
          {currentData.map((blog) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={blog.id}>
              <Link
                to={`/blog/${createSlug(blog.title)}`}
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
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            sx={{ mx: 1 }}
          >
            Previous
          </Button>
          {renderPageNumbers()}
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            sx={{ mx: 1 }}
          >
            Next
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
