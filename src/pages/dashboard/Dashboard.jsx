import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import AdminNavbar from "./Components/AdminNavbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"; // Import Outlet component

const Dashboard = () => {
  const [open, setOpen] = useState(true); // Sidebar control ke liye state

  const toggleSidebar = () => {
    setOpen(!open); // Toggle function
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar open={open} />

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s ease", // Smooth transition
          marginLeft: open ? "100px" : "0px", // Sidebar size ke hisaab se adjust
          padding: 2,
        }}
      >
        <AdminNavbar toggleSidebar={toggleSidebar} />
        <Box sx={{ mt: 8 }}> {/* Adjust margin top to account for fixed navbar */}
          <Outlet /> {/* Render nested routes */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
