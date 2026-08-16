"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/HomePage.module.css";
import { MdArrowLeft } from "react-icons/md";
import { RiArrowRightSFill } from "react-icons/ri";
import NavBar from "@/components/navBar/page";
import Link from "next/link";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <NavBar />
      <div>
        <div className={styles.row}>
          <div className={styles.lsContentBorder}></div>
          <div className={styles.rsContentBorder}></div>
          <div className={styles.main_heading}>
            <h1
              className={`
                ${styles.heading} [transition:opacity_3000ms_ease,translate_800ms_ease] 
                ${visible ? "opacity-100" : "opacity-0"}
                ${leftHovered ? "translate-x-[15vw] " : "translate-x-0"}
                ${rightHovered ? "translate-x-[-15vw]" : "translate-x-0"}`
              }
            >
              Sophisticated <br />
              <span
                className={`
                  inline-block [transition:translate_800ms_ease]
                  ${leftHovered ? "translate-x-24" : "translate-x-0"}
                  ${rightHovered ? "-translate-x-24" : "translate-x-0"}
                `}
              >
                skincare
              </span>
            </h1>
          </div>
          <div className={styles.sub_heading}>
            <p>
              Skinstric developed an A.I that creates a <br />
              highly-personalized routine tailored to <br /> what your skin
              needs.
            </p>
          </div>
          <div
            className={`${styles.left_selection} ${rightHovered ? "opacity-0" : "opacity-100"}`}
          >
            <div className={styles.lsContent}>
              <div className={styles.lsContentBorder}></div>
              <button
                className={styles.lsDiscoverBtn}
                onMouseEnter={() => setLeftHovered(true)}
                onMouseLeave={() => setLeftHovered(false)}
              >
                <div className={styles.playBtnBrdr}></div>
                <MdArrowLeft className={styles.arrowLeft} />
                <span>Discover A.I.</span>
              </button>
            </div>
          </div>
          <div
            className={`${styles.right_selection} ${leftHovered ? "opacity-0" : "opacity-100"}`}
          >
            <div className={styles.rsContent}>
              <div className={styles.rsContentBorder}></div>
              <Link href="/testing">
                <button
                  className={styles.rsBtn}
                  onMouseEnter={() => setRightHovered(true)}
                  onMouseLeave={() => setRightHovered(false)}
                >
                  TAKE TEST
                  <div className={styles.rsBtnIcon}></div>
                  <RiArrowRightSFill className={styles.arrowRight} />
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.enterExperience}>
            <Link href="/testing">
              <button className={styles.enterExperienceBtn}>
                <span>ENTER EXPERIENCE</span>
                <div className={styles.enterExperienceIcon}></div>
                <RiArrowRightSFill className={styles.arrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
