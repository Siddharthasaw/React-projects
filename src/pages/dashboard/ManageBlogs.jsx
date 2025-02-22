import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import FormModal from "./Components/FormModal"; // Correct import path

const ManageBlogs = () => {
  // Dummy Blogs Data (Baad me API se fetch karenge)
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Forex Trading Tips", author: "Admin", date: "2024-02-22" },
    { id: 2, title: "Best Trading Bots", author: "John Doe", date: "2024-02-20" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  // Delete Blog Function
  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  // Add/Edit Blog Function
  const handleAddEditBlog = (blog) => {
    if (blog.id) {
      setBlogs(blogs.map(b => (b.id === blog.id ? blog : b)));
    } else {
      setBlogs([...blogs, { ...blog, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  // Open Modal for Add/Edit
  const openModal = (blog = null) => {
    setCurrentBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2>Manage Blogs</h2>
      <Button variant="contained" color="primary" onClick={() => openModal()}>
        Add New Blog
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Title</b></TableCell>
              <TableCell><b>Author</b></TableCell>
              <TableCell><b>Date</b></TableCell>
              <TableCell><b>Actions</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {blogs.map((blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>{blog.date}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => openModal(blog)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(blog.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FormModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleAddEditBlog} blog={currentBlog} />
    </div>
  );
};

export default ManageBlogs;