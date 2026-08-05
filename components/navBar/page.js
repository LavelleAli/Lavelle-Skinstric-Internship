import React from "react";
import styles from "@/styles/HomePage.module.css";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navContent}>
          <a href="" className={styles.navLink}>
            Skinstric
          </a>
          <div className={styles.navBarLeftContent}>
            {/* <Image src="" alt="" className={styles.bracket} /> */}
            <p>INTRO</p>
            {/* <Image src="" alt="" className={styles.bracket} /> */}
          </div>
        </div>
        <button className={styles.navBtn}>ENTER CODE</button>
      </div>
    </>
  );
};

export default NavBar;
