import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import AdminNavbar from "./Components/AdminNavbar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
  const [open, setOpen] = useState(true); 

  const toggleSidebar = () => {
    setOpen(!open); 
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar open={open} />

      <Box
        sx={{
          flexGrow: 1,
          transition: "margin 0.3s ease",
          marginLeft: open ? "0px" : "60px", // Adjust Sidebar Width
          padding: 3,
        }}
      >
        <AdminNavbar toggleSidebar={toggleSidebar} />
        
        
        {/* ⚠️ Yeh ensure karega ki ManageBlogs properly show ho */}
        <Box sx={{ mt: 8 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
