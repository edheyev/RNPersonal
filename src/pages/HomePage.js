// src/pages/Home.js

import React from "react";
import { Box, Typography } from "@mui/material";
import SpikeFlow from "../components/SpikeFlow";

const Home = () => {
  return (
    <>
      <SpikeFlow />
      <Box
        sx={{
          p: 4,
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{ mb: 2, color: "text.primary", textAlign: "center" }}
        >
          Hi, My name is Ed.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            color: "text.secondary",
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          I blend coding, science, and art.
        </Typography>
        <Typography
          variant="h8"
          sx={{
            mb: 4,
            color: "text.secondary",
            textAlign: "center",
            maxWidth: 600,
          }}
        >
          Please explore!
        </Typography>
        {/* <Button
        component={Link}
        to="/projects"
        variant="contained"
        color="secondary"
        sx={{
          paddingX: 4,
          paddingY: 1.5,
          fontSize: "1.2rem",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "secondary.dark" },
        }}
      >
        View Projects
      </Button> */}
      </Box>
    </>
  );
};

export default Home;
