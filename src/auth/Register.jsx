import React, { useState } from "react";
import {Container, TextField, Button, Typography, Paper, Avatar} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link, useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // ✅ Backend API Call (Change URL to your backend)
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login"); // Redirect to login page
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: 20, marginTop: 50 }}>
        <Grid container justifyContent="center">
          <Avatar style={{ backgroundColor: "#3f51b5" }}>
            <LockOutlinedIcon />
          </Avatar>
        </Grid>
        <Typography variant="h5" align="center" gutterBottom>
          Register
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: 15 }}
          >
            Register
          </Button>
        </form>

        <Typography variant="body2" align="center" style={{ marginTop: 15 }}>
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Register;
