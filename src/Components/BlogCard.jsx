import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Container,
  Button,
  CircularProgress,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

export default function BlogCard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost/mql5/blog-dashboard/api/fetch_blog.php');
      const result = await response.json();
      
      if (result.status === 'success') {
        const formattedBlogs = result.data.map(blog => ({
          id: blog.id,
          title: blog.title,
          author: blog.author,
          date: blog.created_at,
          category: 'FOREX',
          image: blog.featured_image ? 
            `http://localhost/mql5/blog-dashboard/uploads/${blog.featured_image}` : 
            'https://via.placeholder.com/400x200',
          slug: blog.seo_slug || createSlug(blog.title), // Use seo_slug if available, otherwise generate a slug
        }));
        setBlogs(formattedBlogs);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = blogs.slice(startIndex, endIndex);

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
    const maxPageNumbersToShow = 5;
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

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Container maxWidth="xl" sx={{ margin: "15px auto" }}>
        <Grid container spacing={3} sx={{ padding: { xs: 2, sm: 2, md: 3, lg: 3 } }}>
          {currentData.map((blog) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={blog.id}>
              <Link
                to={`http://localhost/mql5/blogs/posts.php/${blog.slug}`} // Use the slug from the API or generated slug
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