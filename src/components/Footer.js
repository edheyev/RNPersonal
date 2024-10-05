// src/components/Footer.js

import React from "react";
import { Box } from "@mui/material";
import SocMedBar from "../components/SocMedBar";

const Footer = () => {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <SocMedBar />
    </Box>
  );
};

export default Footer;
