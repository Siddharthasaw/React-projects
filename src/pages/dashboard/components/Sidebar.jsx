import React from "react";
import { NavLink } from "react-router-dom"; // 👈 Import NavLink
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Dashboard, Article,Category, Comment, People, Settings,Search, BarChart } from "@mui/icons-material";

const Sidebar = ({ open }) => {
  const menuItems = [
    { text: "Dashboard", icon: <Dashboard />, path: "/admin" }, // 👈 Dashboard Route
    { text: "Manage Blogs", icon: <Article />, path: "/admin/manage-blogs" }, // 👈 Manage Blogs Route
    { text: "Manage Categories", icon: <Category />, path: "/admin/manage-categories" },
    { text: "Manage Comments", icon: <Comment />, path: "/admin/manage-comments" },
    { text: "Users", icon: <People />, path: "/admin/users" },
    { text: "SEO Settings", icon: <Search />, path: "/admin/seo-settings" },
    { text: "Analytics", icon: <BarChart />, path: "/admin/analytics" },
    { text: "Settings", icon: <Settings />, path: "/admin/settings" },
  ];

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 60,
          transition: "width 0.3s",
          overflowX: "hidden",
          backgroundColor: "#ecf0f6",
          color: "#000",
          marginTop: "64px",
        },
      }}
    >
      <List>
        {menuItems.map((item, index) => (
          <ListItem 
            button 
            key={index} 
            component={NavLink} 
            to={item.path} // 👈 Route add kiya
            sx={{
              "&.active": { backgroundColor: "#d0d7de" }, // 👈 Active Link Highlight
            }}
          >
            <ListItemIcon sx={{ color: "#000" }}>{item.icon}</ListItemIcon>
            {open && <ListItemText primary={item.text} />}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
