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
            
            <p className="w-20 h-8 text-center text-gray-500 text-sm flex justify-center items-center border-1 border-t-0 border-b-0 rounded-md">INTRO</p>
            
          </div>
        </div>
        <button className={styles.navBtn}>ENTER CODE</button>
      </div>
    </>
  );
};

export default NavBar;
