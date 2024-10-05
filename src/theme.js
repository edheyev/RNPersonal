// src/theme.js

import { createTheme } from "@mui/material/styles";

// Import a Google Font (optional)
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3A3F52",
      contrastText: "#EAAC8B", // Text color
    },
    secondary: {
      main: "#6D597A", // Accent color (e.g., red)
      contrastText: "#E56B6F",
    },
    background: {
      default: "#355070", // Light background for content areas
      paper: "#2d3b4d", // White background for cards, etc.
    },
    text: {
      primary: "#EAAC8B",
      secondary: "#E56B6F",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
      textTransform: "none",
    },
  },
  spacing: 8, // Default spacing unit
});

export default theme;
