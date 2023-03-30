import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const pages = ["About me", "Science", "Code", "Contact"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    console.log(e.target.textContent);

    if (e.target.textContent === "Home") {
      navigate("/");
    } else if (e.target.textContent === "About me") {
      navigate("/about_me");
    }
    if (e.target.textContent === "Science") {
      navigate("/science");
    }
    if (e.target.textContent === "Code") {
      navigate("/code");
    }
    if (e.target.textContent === "Art") {
      navigate("/art");
    }
    if (e.target.textContent === "Contact") {
      navigate("/contact");
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "black", width: "100%" }}
    >
      <Container
        maxWidth="xl"
        style={{ backgroundColor: "black", width: "100%" }}
      >
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <h1 style={{ textDecoration: "none", color: "white" }}>E H-E</h1>
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <AiOutlineMenu style={{ color: "red", size: "50px" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {pages.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={(ev) => {
                    handleCloseUserMenu(ev);
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <MenuItem
                key="artlink"
                onClick={(ev) => {
                  handleCloseUserMenu(ev);
                }}
              >
                <a
                  target="_blank"
                  href="https://edheyev.myportfolio.com/"
                  style={{
                    textalign: "center",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  Art
                </a>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
