import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Backend se users fetch karne ke liye API call (replace with actual API endpoint)
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  const handleEdit = (id) => {
    console.log("Edit user:", id);
    // Yahan edit logic implement karna hai (form ya modal open karna)
  };

  const handleDelete = (id) => {
    console.log("Delete user:", id);
    // Backend delete request ke liye logic implement karna hai
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <IconButton onClick={() => handleEdit(user.id)} color="primary">
                  <Edit />
                </IconButton>
                <IconButton onClick={() => handleDelete(user.id)} color="error">
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Users;
