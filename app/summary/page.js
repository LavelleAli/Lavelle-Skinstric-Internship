"use client";
import { useState } from "react";
import NavBar from "@/components/navBar/page";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import { MdArrowLeft } from "react-icons/md";

const Summary = () => {
  // Right selections variables:
  const RACE_BREAKDOWN = [
    { label: "South asian", percent: 30 },
    { label: "Southeast asian", percent: 29 },
    { label: "Black", percent: 3 },
    { label: "Latino hispanic", percent: 19 },
    { label: "Middle eastern", percent: 6 },
    { label: "East asian", percent: 4 },
    { label: "White", percent: 6 },
  ];

  const ageBreakdown = [
    { label: "0-2", percent: 0 },
    { label: "3-9", percent: 0 },
    { label: "10-19", percent: 0 },
    { label: "20-29", percent: 0 },
    { label: "30-39", percent: 0 },
    { label: "40-49", percent: 0 },
    { label: "50-59", percent: 0 },
    { label: "60-69", percent: 0 },
    { label: "70+", percent: 0 },
  ];

  const sexSelection = [
    { label: "Male", percent: 100 },
    { label: "Female", percent: 0 },
  ]

  const [selectedByCategory, setSelectedByCategory] = useState({
    RACE: "South asian",
    AGE: "70+",
    SEX: "Female",
  });

  function handleActiveSelection(label) {
    setSelectedByCategory((prev) => ({
      ...prev,
      [selectedCategory]: label,
    }));
  }

  // Left selections variables:
  const [selectedCategory, setSelectedCategory] = useState("RACE");

  function handleActiveCategory(category) {
    setSelectedCategory(category);
  }

    const breakdownByCategory = {
    RACE: RACE_BREAKDOWN,
    AGE: ageBreakdown,
    SEX: sexSelection,
  }

  const CIRCUMFERENCE = 308.819;
  const activeItem = breakdownByCategory[selectedCategory].find(
    (item) => item.label === selectedByCategory[selectedCategory],
  );
  const activePercent = activeItem?.percent ?? 0;
  const activeDashOffset = CIRCUMFERENCE * (1 - activePercent / 100);


  return (
    <>
      <NavBar />

      <main className="flex-1 w-full bg-white md:overflow-hidden overflow-auto">
        <div className="md:h-full max-w-full mx-5 px-4 md:px-auto flex flex-col">
          <div className="text-start ml-4 mb-4 md:mb-10 md:ml-0">
            <h2 className="text-base md:text-base font-semibold mb-1 leading-[24px]">
              A.I. ANALYSIS
            </h2>
            <h3 className="text-4xl md:text-[72px] font-normal leading-[64px] tracking-tighter">
              DEMOGRAPHICS
            </h3>
            <h4 className="text-sm mt-2 leading-[24px]">
              PREDICTED RACE &amp; AGE
            </h4>
          </div>

          <div className="grid md:grid-cols-[1.5fr_8.5fr_3.15fr] gap-4 mt-10 mb-40 md:gap-4 pb-0 md:pb-0 md:mb-0">

            {/* Layout: Left */}
            <div className="bg-white-100 space-y-3 md:flex md:flex-col h-[62%]">
              <div
                onClick={() => handleActiveCategory("RACE")}
                className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t ${
                  selectedCategory === "RACE"
                    ? "bg-[#1A1B1C] text-white hover:bg-black"
                    : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                }`}
              >
                <p className="text-base font-semibold">{selectedByCategory.RACE}</p>
                <h4 className="text-base font-semibold mb-1">RACE</h4>
              </div>
              <div
                onClick={() => handleActiveCategory("AGE")}
                className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t ${
                  selectedCategory === "AGE"
                    ? "bg-[#1A1B1C] text-white hover:bg-black"
                    : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                }`}
              >
                <p className="text-base font-semibold">{selectedByCategory.AGE}</p>
                <h4 className="text-base font-semibold mb-1">AGE</h4>
              </div>

              <div
                onClick={() => handleActiveCategory("SEX")}
                className={`p-3 cursor-pointer flex-1 flex flex-col justify-between border-t ${
                  selectedCategory === "SEX"
                    ? "bg-[#1A1B1C] text-white hover:bg-black"
                    : "bg-[#F3F3F4] hover:bg-[#E1E1E2]"
                }`}
              >
                <p className="text-base font-semibold">{selectedByCategory.SEX}</p>
                <h4 className="text-base font-semibold mb-1">SEX</h4>
              </div>
            </div>

            {/* Layout: Middle */}
            <div className="relative bg-gray-100 p-4 flex flex-col items-center justify-center md:h-[57vh] md:border-t">
              <p className="hidden md:block md:absolute text-[40px] mb-2 left-5 top-2">
                {selectedByCategory[selectedCategory]}
              </p>
              <div className="relative md:absolute w-full max-w-[384px] aspect-square mb-4 md:right-5 md:bottom-2">
                <div className="relative w-full h-full max-h-96">
                  <svg viewBox="0 0 100 100">
                    <path
                      d="
                        M 50,50
                        m 0,-49.15
                        a 49.15,49.15 0 1 1 0,98.3
                        a 49.15,49.15 0 1 1 0,-98.3
                      "
                      strokeWidth="1.7"
                      fillOpacity="0"
                      style={{
                        stroke: "#e6e6e6",
                        strokeLinecap: "butt",
                        strokeDasharray: "308.819px, 308.819px",
                        strokeDashoffset: "0px",
                      }}
                    />
                    <path
                      d="
                        M 50,50
                        m 0,-49.15
                        a 49.15,49.15 0 1 1 0,98.3
                        a 49.15,49.15 0 1 1 0,-98.3
                      "
                      strokeWidth="1.7"
                      fillOpacity="0"
                      style={{
                        stroke: "#1A1B1C",
                        strokeLinecap: "butt",
                        transitionDuration: "0.8s",
                        strokeDasharray: "308.819px, 308.819px",
                        strokeDashoffset: `${activeDashOffset}px`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-3xl md:text-[40px] font-normal">
                      {activePercent}
                      <span className="absolute text-xl md:text-3xl">%</span>
                    </p>
                  </div>
                </div>
              </div>
              <p className="md:absolute text-xs text-[#A0A4AB] md:text-sm lg:text-base font-normal mb-1 leading-[24px] md:bottom-[-15%] md:left-[22%] lg:left-[30%] xl:left-[40%] 2xl:left-[45%]">
                If A.I. estimate is wrong, select the correct one.
              </p>
            </div>

            {/* Layout: Right */}

            <div className="bg-gray-100 pt-4 pb-4 md:border-t">
              <div className="space-y-0">
                <div className="flex justify-between px-4">
                  <h4 className="text-base leading-6 tracking-tight font-medium mb-2">
                    {selectedCategory}
                  </h4>
                  <h4 className="text-base leading-6 tracking-tight font-medium mb-2">
                    A.I. CONFIDENCE
                  </h4>
                </div>

                {breakdownByCategory[selectedCategory].map(({ label, age, sex, percent }) => {
                  const active = label === selectedByCategory[selectedCategory];
                  return (
                    <div
                      key={label}
                      onClick={() => handleActiveSelection(label)}
                      className={`flex items-center justify-between h-12 px-4 cursor-pointer ${
                        active
                          ? "bg-[#1A1B1C] text-white hover:bg-black"
                          : "hover:bg-[#E1E1E2]"
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        {active ? (
                          <span className="w-3 h-3 rounded-full border border-white flex items-center justify-center mr-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                          </span>
                        ) : (
                          <span className="w-3 h-3 rounded-full border border-[#1A1B1C] mr-2"></span>
                        )}
                        <span className="font-normal text-base leading-6 tracking-tight">
                          {[label, age, sex]}
                        </span>
                      </div>
                      <span className="font-normal text-base leading-6 tracking-tight">
                        {percent}%
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-4 md:pt-9.25 pb-6 bg-white sticky bottom-40 md:static md:bottom-0 mb-8 md:mb-16">
            <div className="flex justify-between max-w-full mx-auto px-4 md:px-0">
              <Link href="/select">
                <div>
                  <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                      BACK
                    </span>
                  </div>
                  <div className="group hidden sm:flex flex-row relative justify-center items-center">
                    <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300"></div>

                    <MdArrowLeft className="absolute -left-1 text-5xl " />
                    <span className="text-sm font-semibold hidden sm:block ml-6 ">
                      BACK
                    </span>
                  </div>
                </div>
              </Link>
              <Link href="/">
                <div>
                  <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
                    <span className="rotate-[-45deg] text-xs font-semibold sm:hidden">
                      HOME
                    </span>
                  </div>
                  <div className="hidden sm:flex flex-row relative justify-center items-center">
                    <span className="text-sm font-semibold hidden sm:block mr-5">
                      HOME
                    </span>
                    <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-[0.85]"></div>

                    <MdArrowRight className="hidden sm:block relative right-12 text-5xl group-hover:scale-105 transform-transition duration 300" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Summary;
