import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div
      className={[
        styles.appHeader,
        { backgroundColor: "red", flexDirection: "row" },
      ]}
    >
      <div className={styles.homebutton}>
        <Link to="/" className={styles.appName}>
          <h1>EH-E</h1>
        </Link>
      </div>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>
          VVV<i className={styles.caret}></i>
        </button>
        <div className={styles.dropdown_content}>
          <ul>
            <li>
              <Link to="/about_me" className={styles.navlistItem}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="/science" className={styles.navlistItem}>
                Science
              </Link>
            </li>
            <li>
              <Link to="/code" className={styles.navlistItem}>
                Code
              </Link>
            </li>
            <li>
              <Link to="/art" className={styles.navlistItem}>
                Art
              </Link>
            </li>

            <li>
              <a
                href="https://edheyev.myportfolio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navlistItem}
              >
                Arty
              </a>
            </li>
            <li>
              <Link to="/contact" className={styles.navlistItem}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

//note
export default Nav;
