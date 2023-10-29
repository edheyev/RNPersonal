import {
  AppBar,
  Box,
  Container,
  IconButton,
  MenuItem,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

const pages = ["Home", "About me", "Science", "Code", "Contact"];

const ResponsiveAppBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    const selectedPage = e.target.textContent;

    if (pages.includes(selectedPage)) {
      navigate(`/${selectedPage.toLowerCase().replace(/ /g, "_")}`);
    }

    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black", width: "100%" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <h1 style={{ color: "white" }}>E H-E</h1>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <AiOutlineMenu style={{ color: "red" }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            keepMounted
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseUserMenu}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
            <MenuItem key="artlink">
              <a
                href="https://edheyev.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                Art
              </a>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
