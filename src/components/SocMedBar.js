// src/components/SocMedBar.js

import React from "react";
import { Box, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Example icons

const SocMedBar = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <IconButton
        aria-label="GitHub"
        href="https://github.com/edheyev"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <FaGithub />
      </IconButton>
      <IconButton
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <FaLinkedin />
      </IconButton>
      <IconButton
        aria-label="Twitter"
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <FaTwitter />
      </IconButton>
      <IconButton
        aria-label="Email"
        href="mailto:your.email@example.com"
        color="primary"
      >
        <FaEnvelope />
      </IconButton>
    </Box>
  );
};

export default SocMedBar;
