import React from "react";
import { Link } from "react-router-dom";

const Code = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 20,
        margin: 15,
      }}
    >
      <h1>Code</h1>
      <h2>Northcoders porfolio pieces</h2>
      <p>
        I attended a 12-week coding bootcamp which covered full-stack software
        development. This was a practical, industry-led curriculum which
        encouraged best practices such as version control, TDD and
        pair-programming.{" "}
      </p>
      <ul>
        <h3>Back End project: Boardgame database </h3>

        <li>
          UsingP-SQL I created the API for a server that handled requests to a
          board game database. The API was RESTful and fully tested using TDD.{" "}
          <a href=" https://hardcore-northcutt-a0cdd4.netlify.app/">Link</a>
        </li>
        <h3> Front End project: Boardgame review site </h3>

        <li>
          Using React, for my front end project I created a web app that
          utilised the back end boardgame database mentioned above. On the site
          users can log in, read and post and rate reviews, sort and query the
          review database in a number of ways as well as comment.{" "}
          <a href=" https://be-games-app.herokuapp.com/api ">Link</a>
        </li>
        <h3>Final Project Geek Meet App</h3>
        <li>
          For my final project, our group created a mobile app in which users
          can create social groups with friends and find a meeting point between
          each of their locations. They can also chat to other members of their
          group. The app uses React Native, Firebase for the backend and
          implementation of the google maps API for location services.
        </li>
      </ul>
      <h2>Psychology experiments</h2>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <h2>Data analysis</h2>
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <p>
        I have also experimented with making <Link to="Art">art</Link> with
        code.
      </p>
      <h2>My code elsewhere</h2>
      <ul>
        <li>
          <a href="https://github.com/edheyev">Github</a>
        </li>
        <li>
          <a href="https://openprocessing.org/user/166638?view=activity#topPanel">
            Open Processing
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Code;

//links to github and portfolio pieces
