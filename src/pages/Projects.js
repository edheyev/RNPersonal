// src/pages/Projects.js
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActions,
  Chip,
} from "@mui/material";

const projects = [
  {
    title: "Digital Potters Wheel",
    description: "Prototype digital potters wheel with three js.",
    image: "/images/geek-meet-app.png", // Replace with your project image
    link: "/wheel",
    technologies: ["Three.js", "React"],
  },
  {
    title: "Board Game Database API",
    description:
      "Engineered a robust RESTful API using P-SQL, ensuring high reliability through comprehensive TDD.",
    image: "/images/board-game-api.png", // Replace with your project image
    link: "https://hardcore-northcutt-a0cdd4.netlify.app/",
    technologies: ["P-SQL", "RESTful API", "TDD"],
  },
  {
    title: "Board Game Review Platform",
    description:
      "Designed and built an interactive web application integrating the Board Game Database, featuring user authentication, reviews, and comments.",
    image: "/images/board-game-review.png", // Replace with your project image
    link: "https://be-games-app.herokuapp.com/api",
    technologies: ["JavaScript", "React", "Node.js", "Express"],
  },
  {
    title: "Geek Meet App",
    description:
      "Developed a mobile app using React Native and Firebase, incorporating real-time geolocation services via Google Maps API, enabling users to form social groups, find meeting points, and engage in live chat.",
    image: "/images/geek-meet-app.png", // Replace with your project image
    link: "https://your-geek-meet-app-link.com", // Replace with your project link
    technologies: ["React Native", "Firebase", "Google Maps API"],
  },
  // Add more projects as needed
];
const isExternalLink = (url) => {
  return url.startsWith("http"); // Checks if the link starts with "http" (indicating an external link)
};
const Projects = () => {
  return (
    <Box
      sx={{ p: 4, backgroundColor: "background.default", minHeight: "80vh" }}
    >
      <Typography
        variant="h3"
        sx={{ mb: 4, color: "text.primary", textAlign: "center" }}
      >
        Projects
      </Typography>
      <p>UPDATES PENDING!</p>
      {/* 
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ color: "text.primary" }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {project.description}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                {isExternalLink(project.link) ? (
                  // External link handling
                  <Button
                    size="small"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outlined"
                    color="secondary"
                    sx={{ borderRadius: "8px" }}
                  >
                    View Project
                  </Button>
                ) : (
                  // Internal link handling using React Router
                  <Button
                    size="small"
                    component={RouterLink}
                    to={project.link}
                    variant="outlined"
                    color="secondary"
                    sx={{ borderRadius: "8px" }}
                  >
                    View Project
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
       */}
    </Box>
  );
};

export default Projects;
