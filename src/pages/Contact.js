// src/pages/Contact.js

import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (e.g., send data to an email service)
    alert("Message sent!");
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "background.default",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" sx={{ mb: 4, color: "text.primary" }}>
        Contact Me
      </Typography>
      <ContactForm />
    </Box>
  );
};

export default Contact;
