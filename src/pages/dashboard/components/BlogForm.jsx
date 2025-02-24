import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const BlogForm = ({ blogs, setBlogs }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);
  const existingBlog = blogs.find(blog => blog.id === parseInt(id)) || {};

  const [formData, setFormData] = useState({
    title: existingBlog.title || "",
    author: existingBlog.author || "",
    date: existingBlog.date || "",
    content: existingBlog.content || "",
    image: existingBlog.image || "",
    keywords: existingBlog.keywords || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (isEdit) {
      setBlogs(blogs.map(blog => (blog.id === parseInt(id) ? { ...blog, ...formData } : blog)));
    } else {
      setBlogs([...blogs, { ...formData, id: Date.now() }]);
    }
    navigate("/admin/manage-blogs");
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        {isEdit ? "Edit Blog" : "Add New Blog"}
      </Typography>
      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Author"
        name="author"
        value={formData.author}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Content"
        name="content"
        value={formData.content}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <TextField
        label="Image URL"
        name="image"
        value={formData.image}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Keywords"
        name="keywords"
        value={formData.keywords}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default BlogForm;