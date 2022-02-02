import React from "react";

const Science = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        margin: 15,
      }}
    >
      <h1>Science</h1>
      <p>
        I am interested in how space is represented in memory and how we can use
        innovative research techniques and technologies to investigate this. The
        interaction of egocentric and allocentric spatial representations has
        been a focus for my research at MSc and PhD level, using virtual reality
        technology and psychophysical methods to investigate these topics from a
        cognitive psychological perspective. My PhD thesis which focusses on
        these subjects is available online{" "}
        <a href=" https://etheses.whiterose.ac.uk/29943/">here.</a>
      </p>

      <h2>Publications</h2>
      <ul>
        <li>
          Heywood-Everett, E., Baker, D., & Hartley, T. (2021). Testing the
          precision of spatial memory representations using a virtual
          change-detection task: Effects of viewpoint change. Journal of
          Cognitive Psychology.
        </li>
        <li>
          Negen, J., Heywood‐Everett, E., Roome, H. E., & Nardini, M. (2018).
          Development of allocentric spatial recall from new viewpoints in
          virtual reality. Developmental science, 21(1), e12496.
        </li>
      </ul>
      <h2>Links</h2>
      <ul>
        <li>
          <a href="osf.io/wkupb">Open science framework repos and profile.</a>
        </li>
        <li>
          <a href="https://scholar.google.com/citations?user=KnAA51gAAAAJ&hl=en&oi=sra">
            Google Scholar profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Science;
