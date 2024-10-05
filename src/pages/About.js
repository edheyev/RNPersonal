// src/pages/About.js

import React from "react";
import {
  Box,
  Typography,
  Link,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BckgrndSketch from "../components/BckgrndSketch";

const About = () => {
  const professionalSummary = `Hi! I'm Ed! I'm a creative generalist with experience in a range of fields. I have had the opporunity to apply and develop my skills in the clinical sector as an assistant psychologist, in academia as a graduate researcher and in tech as a full-stack software engineer and data specialist. In my free time I enjoy taking on creative projects and making pottery!`;
  const technicalSkills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "C#",
    "MATLAB",
    "R-Studio",
    "SQL",
    "React",
    "Vue.js",
    "HTML5",
    "CSS",
    "Express.js",
    "Jest",
    "Pytest",
    "Cypress",
    "Flask",
    "Swagger",
    "Unity3D",
    "Adobe Suite",
  ];

  const softSkills = [
    "Project Management",
    "Effective Communication",
    "Teamwork",
    "Problem-Solving",
    "Agile Methodologies",
    "Time Management",
    "Adaptability",
    "Leadership",
  ];

  return (
    <Box
      sx={{
        p: { xs: 2, md: 4 },
        backgroundColor: "background.default",
        minHeight: "80vh",
        maxWidth: "960px", // Sets the maximum width for the content
        margin: "auto", // Centers the content horizontally
      }}
    >
      {/* <BckgrndSketch /> */}
      {/* Introduction Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" sx={{ mb: 2, color: "text.primary" }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          {professionalSummary}
        </Typography>
      </Box>

      {/* Skills Section */}
      <Box sx={{ mb: 4, maxWidth: "75%" }}>
        <Typography variant="h4" sx={{ mb: 2, color: "text.primary" }}>
          Technical Skills
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {technicalSkills.map((skill) => (
            <Chip key={skill} label={skill} color="primary" />
          ))}
        </Box>
      </Box>

      {/* Soft Skills Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, color: "text.primary" }}>
          Soft Skills
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {softSkills.map((skill) => (
            <Chip key={skill} label={skill} color="secondary" />
          ))}
        </Box>
      </Box>

      {/* Experience & Education Section with Accordions */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, color: "text.primary" }}>
          Experience & Education
        </Typography>

        {/* Experience Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Professional Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* List summarized experiences */}
            <Typography variant="h6">
              Freelance Data Engineer | MyMup
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Remote | 09/2023 - Present
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Developed Python applications for data aggregation and cleaning
              for the National Mental Health Data Hub.
            </Typography>

            <Typography variant="h6">
              Software Engineer | Rolls Royce R2 Factory
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              London/Hybrid | 12/2022 - 06/2023
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Developed front-end applications using Vue.js and back-end REST
              APIs. Implemented automated CI/CD pipelines with GitHub Actions
              and Google Cloud Builds.
            </Typography>

            {/* Add more summarized experiences as needed */}
          </AccordionDetails>
        </Accordion>

        {/* Education Accordion */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {/* List summarized education */}
            <Typography variant="h6">
              PhD in Cognitive Psychology | University of York
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              10/2017 - 10/2021
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Developed virtual tools using Unity and VR to test spatial memory.
              Created statistical packages in MATLAB and R for data analysis.
            </Typography>

            <Typography variant="h6">
              MSc in Cognitive Neuroscience | Durham University
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              09/2014 - 09/2015 | Merit
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Conducted research on allocentric spatial recall in virtual
              reality, utilizing immersive technologies and advanced statistical
              methods.
            </Typography>

            {/* Add more summarized education as needed */}
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Interests & Additional Skills Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 2, color: "text.primary" }}>
          Interests & Additional Skills
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          <strong>Graphic Design:</strong> Proficient with Adobe Suite
          (Photoshop, Illustrator, After Effects). I love creating art with a
          variety of digital and non-digital mediums. This extends to freelance
          graphic design work. Please see my{" "}
          <Link
            href="https://edheyev.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "secondary.main", textDecoration: "underline" }}
          >
            portfolio
          </Link>{" "}
          for examples.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          <strong>3D Modelling & Animation:</strong> Experience with Unity3D and
          Blender for creating and animating 3D models.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
          <strong>Advanced Statistics:</strong> Proficient in statistical
          analysis and modeling using MATLAB and R.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          <strong>Volunteer Work:</strong> Conducted statistical analysis on
          barriers to psychological services for BME communities and supervised
          clinical audits at Bradford District Care Trust. Designed and
          facilitated interactive STEM activities for festival attendees and
          managed outreach events.
        </Typography>
      </Box>

      {/* Call-to-Action: Download CV */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          href="/path-to-your-cv.pdf" // Ensure you have your CV in the public folder
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            paddingX: 4,
            paddingY: 1.5,
            fontSize: "1rem",
            borderRadius: "8px",
          }}
        >
          Download CV
        </Button>
      </Box>

      {/* Social Media and Background Sketch */}
    </Box>
  );
};

export default About;
