"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import axios from "axios";
import NavBar from "@/components/navBar/page";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
      const [{ data }] = await Promise.all([
        axios.post(
          `https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne`,
          { name, location },
        ),
        wait(30000),
      ]);
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
            className="relative z-10"
          >
            <div className="flex flex-col items-center"></div>
            {step === "name" ? (
              <>
                <p className="relative left-[300px] text-sm text-gray-400 tracking-wider uppercase mb-1 mt-10 ">
                  CLICK TO TYPE
                </p>
                <input
                  type="text"
                  className="text-5xl sm:text-6xl font-normal text-center bg-transparent pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10 focus:outline-none "
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
                <p className="relative left-[300px] text-sm text-gray-400 tracking-wider uppercase mb-1 mt-10">
                  CLICK TO TYPE
                </p>
                <input
                  type="text"
                  className="text-5xl sm:text-6xl font-normal text-center bg-transparent pt-1 tracking-[-0.07em] leading-[64px] text-[#1A1B1C] z-10 focus:outline-none "
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

        <div className="position absolute left-170 top-00 w-[500px] h-[500px] border-4 border-dotted border-[#c5c6c6] animate-[spin_60s_linear_infinite] "></div>

        <div className="position absolute left-160 top-00 w-[550px] h-[550px] border-4 border-dotted border-[#e6e6e6] animate-[spin_50s_linear_infinite] "></div>

        <div className="position absolute left-160 top-00 w-[600px] h-[600px] border-4 border-dotted border-[#f4f4f4] animate-[spin_40s_linear_infinite] "></div>
      </div>

      <div className="absolute bottom-38.5 md:bottom-8 w-full flex justify-between md:px-9 px-13">
        <Link href="/" className="inset-0" aria-label="Back">
          <div>
            {/* <div className="relative w-12 h-12 flex items-center justify-center border birder-[#1A1B1C] rotate-45 scale-[1] am:hidden">
                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">Back</span>
                </div> */}

            <div className="group hidden sm:flex flex-row relative justify-center items-center">
              <div className="w-12 h-12 hidden sm:flex justify-center border border-[1A1B1...e-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300 rotate-45 "></div>
              <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300"></span>
              <MdArrowLeft className="absolute left-[-2px] text-5xl" />
              <span className="text-md font-semibold hidden sm:block ml-6">
                Back
              </span>
            </div>

            <button className="absolute right-10 bottom-0 flex items-center gap-15 cursor-pointer group ">
              <span className="relative">Proceed</span>
              <div className="absolute right-10 bottom-0 w-12 h-12 hidden sm:flex justify-center border border-[1A1B1...e-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300 rotate-45 "></div>
              <MdArrowRight className="relative right-10 text-5xl group-hover:scale-105 transform-transition duration 300" />
            </button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Testing;
