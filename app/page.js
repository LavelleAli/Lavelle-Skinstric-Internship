"use client";
import { useState, useEffect, useEffectEvent } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { MdArrowLeft } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import NavBar from "@/components/navBar/page";

export default function Home() {
  

  return (
    <>
      <NavBar />
      <div className="nextRouteAnnouncerForScreenreadersComeBackToThisLater"></div>
      <div>
        <div className={styles.row}>
          {/* <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div> */}
          <div className={styles.main_heading}>
            <h1 className={styles.heading}>
              Sophisticated <br /> <span>skincare</span>
            </h1>
          </div>
          <div className={styles.sub_heading}>
            <p>
              Skinstric developed an A.I that creates a <br />
              highly-personalized routine tailored to <br /> what your skin
              needs.
            </p>
          </div>
          <div className={styles.left_selection}>
            <div className={styles.lsContent}>
              <div className={styles.lsContentBorder}></div>
              <button className={styles.lsDiscoverBtn}>
                <div className={styles.playBtnBrdr}></div>
                <MdArrowLeft className={styles.arrowLeft} />
                <span>Discover A.I.</span>
              </button>
            </div>
          </div>
          <div className={styles.right_selection}>
            <div className={styles.rsContent}>
              <div className={styles.rsContentBorder}></div>
              <a href="">
                <button className={styles.rsBtn}>
                  TAKE TEST
                  <div className={styles.rsBtnIcon}></div>
                  <RiArrowRightSFill className={styles.arrowRight} />
                </button>
              </a>
            </div>
          </div>
          {/* <div>
            <a href="">
              <button>
                <span>ENTER EXPERIENCE</span>
                <div></div>
                <span>
                  <svg></svg>
                </span>
              </button>
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}
