import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import Logo from "../assets/green_logo.png"; // Replace with your actual logo path    

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    // Backend API call for admin authentication (to be implemented)
    console.log("Logging in with", email, password);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>

    
    <Container maxWidth="sm" >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#fff",
          padding:"70px 30px 70px 30px",
          backgroundColor: "#ecf0f6",
        }}
      >
        <img src={Logo} alt="Logo" width={"200px"}/>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleLogin} style={{ width: "100%" }}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Container>
    </Box>
  );
}
