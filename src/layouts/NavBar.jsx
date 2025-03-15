import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TelegramIcon from "@mui/icons-material/Telegram";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CodeIcon from "@mui/icons-material/Code";
import DescriptionIcon from "@mui/icons-material/Description";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LanguageIcon from "@mui/icons-material/Language";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      fetch(`http://localhost/mql-dashboard/api/search.php?query=${searchValue}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#3b6ea5", padding: "5px 20px" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="MQL5 Logo" style={{ height: "40px" }} />
          </Link>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2}}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", fontWeight:600}}>Home</Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", fontWeight:600 }}>About</Typography>
            </Link>
            <Link to="/blog" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", fontWeight:600 }}>Market News</Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", fontWeight:600 }}>Contact</Typography>
            </Link>
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
              width: "400px",
              backgroundColor: "white",
              borderRadius: 5,
              padding: "0px 10px",
            }}
          >
            <InputBase
              placeholder="search..."
              sx={{
                width: "100%",
              }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={handleSearch}
            />
            <IconButton onClick={(e) => handleSearch(e)}>
              <SearchIcon style={{ color: "#3b6ea5" }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button sx={{ backgroundColor: "#FFA500", color: "white" }}>
                Create an account
              </Button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "white", fontWeight:600}}>Log in</Typography>
            </Link>
          </Box>
        </Box>

        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleMobileMenu}
        >
          <MenuIcon style={{ color: "white" }} />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button component={Link} to="/blog">
            <ListItemText primary="Market News" />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/register">
            <ListItemText primary="Create an account" />
          </ListItem>
          <ListItem button component={Link} to="/login">
            <ListItemText primary="Log in" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        padding: "5px 20px",
        backgroundColor: "#ecf0f6",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {[
            "Trading Strategies",
            "Forex Indicators & Tools",
            "Broker Reviews",
            "Market Analysis ",
            "Forex Education",
            "Forex Basics",
          ].map((item, index) => (
            <Typography
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#333",
              }}
            >
              {index === 0 && <MenuBookIcon sx={{ color: "#ffa500" }} />}
              {index === 1 && <CodeIcon sx={{ color: "#ffa500" }} />}
              {index === 2 && <DescriptionIcon sx={{ color: "#ffa500" }} />}
              {index === 3 && <AutoStoriesIcon sx={{ color: "#ffa500" }} />}
              {index === 4 && <PsychologyIcon sx={{ color: "#ffa500" }} />}
              {index === 5 && <CalendarTodayIcon sx={{ color: "#ffa500" }} />}
              {index === 6 && <LanguageIcon sx={{ color: "#ffa500" }} />}
            </Typography>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;