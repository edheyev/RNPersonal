import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navlist.module.css";

const NavList = () => {
  return (
    <div style={{ padding: 10, width: "20%" }} className={styles.vertical}>
      <Link to="/about_me" className={styles.navlistItem}>
        About Me
      </Link>
      <Link to="/science" className={styles.navlistItem}>
        Science
      </Link>
      <Link to="/code" className={styles.navlistItem}>
        Code
      </Link>
      <a href="https://edheyev.myportfolio.com/" className={styles.navlistItem}>
        Art
      </a>
      <Link to="/contact" className={styles.navlistItem}>
        Contact
      </Link>
    </div>
  );
};

export default NavList;
