import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "SERVICES", path: "/services" },
  { name: "ROOMS", path: "/rooms" },
  { name: "CONTACT", path: "/contact" },
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loggedIn, setLoggedIn] = useState({ user: false, admin: false });
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleUserLogin = () => {
    setLoggedIn({ user: true, admin: false });
    navigate("/login");
    handleMenuClose();
  };

  
  const handleLogout = () => {
    setLoggedIn({ user: false, admin: false });
    navigate("/");
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" sx={{ background: "black" }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#ffc107", fontWeight: "bold" }}>
          HOTELIER
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item.name} component={Link} to={item.path} sx={{ color: "white" }}>
              {item.name}
            </Button>
          ))}
        </Box>

       
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleUserLogin}>Login</MenuItem>
          
           <MenuItem onClick={handleLogout}>Logout</MenuItem>
          {(loggedIn.user || loggedIn.admin) && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
