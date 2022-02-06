import React from "react";
import SocMedBar from "../components/SocMedBar";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Contact me</h1>

      <SocMedBar />
    </div>
  );
};

export default Contact;
