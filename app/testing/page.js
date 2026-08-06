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
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        `https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne`,
        { name, location },
      );
      setData(data);
      setStep("done");
    } catch (err) {
      setError(err);
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
    if (!location.trim()) return;
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
            <p className="text-sm sm:text-xl font-normal text-center text-[1A1B1C] z-10 text-[#6d6d6d]">
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
                  className="text-3xl sm:text-5xl lg:text-6xl font-normal text-center bg-transparent pt-1 tracking-[-0.07em] leading-[40px] sm:leading-[56px] lg:leading-[64px] text-[#1A1B1C] z-10 focus:outline-none "
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
                <input
                  type="text"
                  className="text-3xl sm:text-5xl lg:text-6xl font-normal text-center bg-transparent pt-1 tracking-[-0.07em] leading-[40px] sm:leading-[56px] lg:leading-[64px] text-[#1A1B1C] z-10 focus:outline-none "
                  placeholder="Your City Name"
                  autoComplete="off"
                  autoFocus
                  name="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </>
            )}
            <button className="sr-only" type="submit">
              Submit
            </button>
            <div className="border-b-1 border-black w-100 mx-auto "></div>
          </form>
        )}

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] border-4 border-dotted border-[#c5c6c6] animate-[spin_60s_linear_infinite]"></div>

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] md:w-[470px] md:h-[470px] lg:w-[550px] lg:h-[550px] border-4 border-dotted border-[#e6e6e6] animate-[spin_50s_linear_infinite]"></div>

        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[520px] md:h-[520px] lg:w-[600px] lg:h-[600px] border-4 border-dotted border-[#f4f4f4] animate-[spin_40s_linear_infinite]"></div>
      </div>

      <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
        <Link href="/" className="inset-0" aria-label="Back">
          <div>
            <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
              <span className="rotate-[-45deg] text-xs font-semibold">
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
