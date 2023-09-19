import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navlist.module.css";

const NavList = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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

      <Link to="/contact" className={styles.navlistItem}>
        Contact
      </Link>

      <a
        href="https://edheyev.myportfolio.com/"
        className={styles.navlistItem}
        onClick={() => openInNewTab("https://edheyev.myportfolio.com/")}
      >
        Art
      </a>
    </div>
  );
};

export default NavList;
