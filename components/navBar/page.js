import React from "react";
import styles from "@/styles/HomePage.module.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.navLink}>
            Skinstric
          </Link>
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
