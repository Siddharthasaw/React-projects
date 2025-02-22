import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Badge } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../../assets/logo.png"; // Adjust the path as needed

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#3b6ea5", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 1 }}>
          <img src={logo} alt="Logo" style={{ height: "40px" }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
