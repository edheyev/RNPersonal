// src/components/ResponsiveAppBar.js

import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./ResponsiveAppBar.module.css";

const pages = ["Home", "About", "Projects", "Contact"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    if (page === "Art") {
      window.open("https://edheyev.myportfolio.com/", "_blank");
    } else if (page === "Home") {
      navigate("/"); // Home should go to the root "/"
    } else {
      const path = `/${page.toLowerCase().replace(/ /g, "_")}`;
      navigate(path);
    }
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" color="primary" sx={{ boxShadow: 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for large screens */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: "bold",
              color: "primary.contrastText",
              textDecoration: "none",
            }}
          >
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              E H-E
            </NavLink>
          </Typography>

          {isMobile && (
            <Box sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                sx={{ mr: 2 }}
              >
                <AiOutlineMenu />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={() => setAnchorElNav(null)}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                {/* Additional Menu Item for Art */}
                <MenuItem key="Art" onClick={() => handleCloseNavMenu("Art")}>
                  <Typography textAlign="center">Art</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}

          {/* Logo for mobile */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: "bold",
              color: "primary.contrastText",
              textDecoration: "none",
            }}
          >
            <NavLink
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
            >
              E H-E
            </NavLink>
          </Typography>

          {/* Navigation links for desktop */}
          {!isMobile && (
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              {pages.map((page) => (
                <NavLink
                  to={
                    page === "Home"
                      ? "/"
                      : `/${page.toLowerCase().replace(/ /g, "_")}`
                  }
                  key={page}
                  style={{ textDecoration: "none" }}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : ""
                  }
                >
                  <Button
                    sx={{
                      my: 2,
                      color: "primary.contrastText",
                      display: "block",
                      textTransform: "none",
                      fontWeight: "medium",
                      borderBottom: "2px solid transparent",
                      "&.active-link": {
                        borderBottom: "2px solid secondary.main", // Accent color from theme
                      },
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transition: "background-color 0.3s ease",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}

              {/* Additional Button for Art */}
              <Button
                key="Art"
                onClick={() => handleCloseNavMenu("Art")}
                sx={{
                  my: 2,
                  color: "primary.contrastText",
                  display: "block",
                  textTransform: "none",
                  fontWeight: "medium",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: "background-color 0.3s ease",
                  },
                }}
              >
                Art
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
