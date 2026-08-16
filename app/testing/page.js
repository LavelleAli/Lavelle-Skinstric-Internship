"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";
import NavBar from "@/components/navBar/page";
import BackButton from "@/components/BackButton/BackButton";
import ProceedButton from "@/components/ProceedButton/ProceedButton";

const Testing = () => {
  const containerRef = useRef(null);
  const [step, setStep] = useState("name");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [locationError, setLocationError] = useState(false);
  const [loading, setLoading] = useState(false);

  const CITY_NAME_REGEX = /^[A-Za-z\s]*$/;

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setLocationError(value !== "" && !CITY_NAME_REGEX.test(value));
  };

  const fetchAPI = async () => {
    setLoading(true);
    try {
      await axios.post(
        `https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne`,
        { name, location },
      );
      setStep("done");
    } catch (err) {
      console.log("Failed to post to API", err);
    } finally {
      setLoading(false);
    }
  };

  useGSAP(
    () => {
      if (!loading) return;
      gsap.to(".loading-dot", {
        y: -10,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef, dependencies: [loading] },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === "name") {
      if (!name.trim()) return;
      setStep("location");
      return;
    }
    if (!location.trim() || locationError) return;
    fetchAPI();
  };

  return (
    <>
      <NavBar />
      <div className="min-h-[30vh] flex flex-col items-center justify-center bg-white text-center">
        <div className="absolute top-16 left-9 text-left">
          <p className="font-semibold text-xs">TO START ANALYSIS</p>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative flex flex-col items-center justify-center mb-40 w-full h-full"
      >
        {loading ? (
          <>
            <p className="text-sm sm:text-2xl font-normal text-center text-[#717171] z-10 mb-4">
              Processing Submission
            </p>
            <div className="flex items-center justify-center gap-3 h-24">
              <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
              <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
              <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
            </div>
          </>
        ) : step === "done" ? (
          <>
            <p className="text-sm sm:text-2xl font-normal text-center text-[#1A1B1C] z-10 mb-4">
              Thank You!
            </p>
            <p className="text-sm sm:text-xl font-normal text-center text-[1A1B1C] z-10">
              Proceed for the next step
            </p>
          </>
        ) : (
          <form
            action="javascript:throw new Error('React form unexpectedly submitted.')"
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col items-center"
          >
            {step === "name" ? (
              <>
                <p className="text-sm text-gray-400 tracking-wider uppercase mb-1 mt-10 ">
                  CLICK TO TYPE
                </p>
                <input
                  type="text"
                  className="text-3xl sm:text-5xl lg:text-6xl font-normal text-center bg-transparent pt-1 tracking-[-0.07em] leading-10 sm:leading-14 lg:leading-16 text-[#1A1B1C] z-10 focus:outline-none "
                  placeholder="Introduce Yourself"
                  autoComplete="off"
                  autoFocus
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            ) : (
              <>
                <p className="text-sm text-gray-400 tracking-wider uppercase mb-1 mt-10">
                  CLICK TO TYPE
                </p>
                {locationError && (
                  <p className="text-[14px] text-red-600 mb-1">
                    Please enter a valid city without numbers or special
                    characters
                  </p>
                )}
                <input
                  type="text"
                  className="text-3xl sm:text-5xl lg:text-6xl font-normal text-center bg-transparent pt-1 tracking-[-0.07em] leading-10 sm:leading-14 lg:leading-16 text-[#1A1B1C] z-10 focus:outline-none "
                  placeholder="Your City Name"
                  autoComplete="off"
                  autoFocus
                  name="location"
                  value={location}
                  onChange={handleLocationChange}
                />
              </>
            )}
            <button className="sr-only" type="submit">
              Submit
            </button>
            <div className="border-b border-black w-100 mx-auto "></div>
          </form>
        )}

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-65 h-65 sm:w-85 sm:h-85 md:w-105 md:h-105 lg:w-125 lg:h-125 border-4 border-dotted border-[#c5c6c6] animate-[spin_60s_linear_infinite]"></div>

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 sm:w-97.5 sm:h-97.5 md:w-117.5 md:h-117.5 lg:w-137.5 lg:h-137.5 border-4 border-dotted border-[#e6e6e6] animate-[spin_50s_linear_infinite]"></div>

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-85 h-85 sm:w-110 sm:h-110 md:w-130 md:h-130 lg:w-150 lg:h-150 border-4 border-dotted border-[#f4f4f4] animate-[spin_40s_linear_infinite]"></div>
      </div>

      <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
        <Link href="/" className="inset-0" aria-label="Back">
          <div>
            <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
              <span className="-rotate-45 text-xs font-semibold">
                Back
              </span>
            </div>

            <BackButton />

            <ProceedButton step={step} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Testing;
