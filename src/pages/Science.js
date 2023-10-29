import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    margin: "15px",
    backgroundColor: "#F5F5F5",
    borderRadius: "15px",
    boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.1)",
  },
  header: {
    borderBottom: "1px solid #ccc",
    paddingBottom: "10px",
    marginBottom: "20px",
  },
  publication: {
    marginBottom: "15px",
  },
  links: {
    textDecoration: "underline",
    color: "#007bff",
  },
};

const Science = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Science</h1>
      </div>
      <p>
        I am interested in how space is represented in memory and how we can use
        innovative research techniques and technologies to investigate this. The
        interaction of egocentric and allocentric spatial representations has
        been a focus for my research at MSc and PhD level, using virtual reality
        technology and psychophysical methods to investigate these topics from a
        cognitive psychological perspective. My PhD thesis, which focuses on
        these subjects, is available online{" "}
        <a style={styles.links} href="https://etheses.whiterose.ac.uk/29943/">
          here.
        </a>
      </p>
      <div style={styles.header}>
        <h2>Publications</h2>
      </div>
      <ul>
        <li style={styles.publication}>
          Heywood-Everett, E., Baker, D., & Hartley, T. (2021). Testing the
          precision of spatial memory representations using a virtual
          change-detection task: Effects of viewpoint change. Journal of
          Cognitive Psychology.
        </li>
        <li style={styles.publication}>
          Negen, J., Heywood‐Everett, E., Roome, H. E., & Nardini, M. (2018).
          Development of allocentric spatial recall from new viewpoints in
          virtual reality. Developmental science, 21(1), e12496.
        </li>
      </ul>
      <div style={styles.header}>
        <h2>Links</h2>
      </div>
      <ul>
        <li style={styles.publication}>
          <a style={styles.links} href="osf.io/wkupb">
            Open science framework repos and profile.
          </a>
        </li>
        <li style={styles.publication}>
          <a
            style={styles.links}
            href="https://scholar.google.com/citations?user=KnAA51gAAAAJ&hl=en&oi=sra"
          >
            Google Scholar profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Science;
