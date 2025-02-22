import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, Article, People, Settings } from "@mui/icons-material";

const Sidebar = ({ open }) => {
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard /> },
    { text: "Manage Blogs", icon: <Article /> },
    { text: "Users", icon: <People /> },
    { text: "Settings", icon: <Settings /> },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? 240 : 60, // Sidebar width adjust
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 60,
          transition: "width 0.3s",
          overflowX: "hidden",
          backgroundColor: "#ecf0f6", // Change background color
          color: "#000", // Change text color
          marginTop: "64px", // Adjust margin top to account for fixed navbar
        },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon sx={{ color: "#000" }}>{item.icon}</ListItemIcon> {/* Change icon color */}
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
