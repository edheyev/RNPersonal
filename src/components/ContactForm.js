import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Box, Typography, TextField, Button } from "@mui/material";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again later.");
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: 600,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField
        label="Name"
        variant="outlined"
        required
        sx={{ backgroundColor: "primary.dark" }}
      />
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        required
        sx={{ backgroundColor: "primary.dark" }}
      />
      <TextField
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        required
        sx={{ backgroundColor: "primary.dark" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        sx={{
          paddingY: 1.5,
          fontSize: "1rem",
          borderRadius: "8px",
          "&:hover": { backgroundColor: "secondary.dark" },
        }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
