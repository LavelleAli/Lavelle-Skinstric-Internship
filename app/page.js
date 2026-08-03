"use client";
import { useState, useEffect, useEffectEvent } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/styles/HomePage.module.css";
import { MdArrowLeft } from "react-icons/md";

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAPI = useEffectEvent(async () => {
    try {
      const { data } = await axios.get(
        `https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne`,
      );
      setData(data);
      console.log(data);
    } catch (err) {
      setError(err);
    }
  });

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.navContent}>
          <a href="" className={styles.navLink}>Skinstric</a>
          <div className={styles.navBarLeftContent}>
            <Image src="" alt="" className={styles.bracket} />
            <p>INTRO</p>
            <Image src="" alt="" className={styles.bracket} />
          </div>
        </div>
        <button className={styles.navBtn}>ENTER CODE</button>
      </div>
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
              Sophisticated <br/> <span>skincare</span>
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
               <MdArrowLeft  className={styles.arrowLeft}/>
                <span>Discover A.I.</span>
              </button>
            </div>
          </div>
          <div id="right_selection">
            <div>
              <div></div>
              <a href="">
                <button>
                  TAKE TEST
                  <div></div>
                  <span>(playbutton)</span>
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
