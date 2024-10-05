// src/pages/Science.js

import React from "react";
import {
  Box,
  Typography,
  Link as MuiLink,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Science = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        p: 4,
        m: { xs: 2, md: 4 },
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          pb: 1,
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1" color="text.primary">
          Science
        </Typography>
      </Box>

      {/* Introduction Paragraph */}
      <Typography variant="body1" color="text.secondary" paragraph>
        I am interested in how space is represented in memory and how we can use
        innovative research techniques and technologies to investigate this. The
        interaction of egocentric and allocentric spatial representations has
        been a focus for my research at MSc and PhD level, using virtual reality
        technology and psychophysical methods to investigate these topics from a
        cognitive psychological perspective. My PhD thesis, which focuses on
        these subjects, is available online{" "}
        <MuiLink
          href="https://etheses.whiterose.ac.uk/29943/"
          target="_blank"
          rel="noopener noreferrer"
          color="secondary.main"
          underline="hover"
        >
          here.
        </MuiLink>
      </Typography>

      {/* Publications Header */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          pb: 1,
          mb: 3,
        }}
      >
        <Typography variant="h5" component="h2" color="text.primary">
          Publications
        </Typography>
      </Box>

      {/* Publications List */}
      <List>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.secondary">
                Heywood-Everett, E., Baker, D., & Hartley, T. (2021). Testing
                the precision of spatial memory representations using a virtual
                change-detection task: Effects of viewpoint change. Journal of
                Cognitive Psychology.
              </Typography>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <Typography variant="body1" color="text.secondary">
                Negen, J., Heywood‐Everett, E., Roome, H. E., & Nardini, M.
                (2018). Development of allocentric spatial recall from new
                viewpoints in virtual reality. Developmental science, 21(1),
                e12496.
              </Typography>
            }
          />
        </ListItem>
      </List>

      {/* Links Header */}
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          pb: 1,
          mt: 4,
          mb: 3,
        }}
      >
        <Typography variant="h5" component="h2" color="text.primary">
          Links
        </Typography>
      </Box>

      {/* Links List */}
      <List>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <MuiLink
                href="https://osf.io/wkupb"
                target="_blank"
                rel="noopener noreferrer"
                color="secondary.main"
                underline="hover"
              >
                Open Science Framework Repositories and Profile
              </MuiLink>
            }
          />
        </ListItem>
        <ListItem disableGutters>
          <ListItemText
            primary={
              <MuiLink
                href="https://scholar.google.com/citations?user=KnAA51gAAAAJ&hl=en&oi=sra"
                target="_blank"
                rel="noopener noreferrer"
                color="secondary.main"
                underline="hover"
              >
                Google Scholar Profile
              </MuiLink>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Science;
