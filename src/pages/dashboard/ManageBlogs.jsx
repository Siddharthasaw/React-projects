import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ManageBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Forex Trading Tips", author: "Admin", date: "2024-02-22", content: "", image: "", keywords: "" },
    { id: 2, title: "Best Trading Bots", author: "John Doe", date: "2024-02-20", content: "", image: "", keywords: "" },
  ]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (confirmDelete) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  return (
    <div>
      <h2>Manage Blogs</h2>
      <Button variant="contained" color="primary" onClick={() => navigate("/admin/manage-blogs/new")}>
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
                  <IconButton color="primary" onClick={() => navigate(`/admin/manage-blogs/edit/${blog.id}`)}>
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
    </div>
  );
};

export default ManageBlogs;