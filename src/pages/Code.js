import React from "react";

const Code = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "20px",
        margin: "15px",
        backgroundColor: "#96d6c8",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Code</h1>

      <h2 style={{ marginBottom: "10px" }}>
        High-Impact Software Development Portfolio
      </h2>

      <p style={{ marginBottom: "20px" }}>
        As a graduate of an intensive 12-week coding bootcamp, I've been trained
        in industry-standard best practices and cutting-edge technologies, such
        as version control, Test-Driven Development (TDD), and agile
        methodologies.
      </p>

      <h2 style={{ marginBottom: "10px" }}>Professional Experience</h2>

      <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Completed a two-year tenure as a Software Engineer at a leading data
        science firm, leveraging Python, JavaScript, and TypeScript to develop
        data-driven solutions.
      </p>

      <h3 style={{ marginBottom: "10px" }}>
        Signature Backend Project: Board Game Database API
      </h3>

      <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Engineered a robust RESTful API using P-SQL, ensuring high reliability
        through comprehensive TDD.{" "}
        <a href="https://hardcore-northcutt-a0cdd4.netlify.app/">
          View Project
        </a>
      </p>

      <h3 style={{ marginBottom: "10px" }}>
        Frontend Achievement: Board Game Review Platform
      </h3>

      <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Designed and built an interactive web application that seamlessly
        integrates with the above Board Game Database, providing a rich user
        experience including login, review, and comment features.{" "}
        <a href="https://be-games-app.herokuapp.com/api">View Project</a>
      </p>

      <h3 style={{ marginBottom: "10px" }}>Capstone Project: Geek Meet App</h3>

      <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Spearheaded the development of a mobile app using React Native and
        Firebase, featuring real-time geolocation services via Google Maps API.
        The app enables users to form social groups, find central meeting
        points, and engage in live chat.
      </p>

      <h2 style={{ marginBottom: "10px" }}>Explore My Work</h2>

      <ul style={{ marginLeft: "20px" }}>
        <li>
          <a href="https://github.com/edheyev">Github Repository</a>
        </li>
        <li>
          <a href="https://openprocessing.org/user/166638?view=activity#topPanel">
            Open Processing Portfolio
          </a>
        </li>
      </ul>

      <p style={{ marginTop: "20px" }}>
        Beyond technical projects, I've also delved into the intersection of
        programming and art.{" "}
        <a target="_blank" href="https://edheyev.myportfolio.com/">
          Explore My Art Portfolio
        </a>
      </p>
    </div>
  );
};

export default Code;
