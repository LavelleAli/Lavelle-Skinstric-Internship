"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import NavBar from "@/components/navBar/page";

const Results = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(".diamond-large", {
        rotation: "+=360",
        duration: 40,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".diamond-medium", {
        rotation: "+=360",
        duration: 50,
        repeat: -1,
        ease: "none",
      });
      gsap.to(".diamond-small", {
        rotation: "+=360",
        duration: 60,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <NavBar />
      <div
        ref={containerRef}
        className="min-h-[92vh] flex flex-col bg-white relative md:pt-16 justify-center"
      >
        <div className="absolute top-2 left-9 md:left-8 text-left">
          <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
        </div>
        <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-[-20px] md:space-y-0">
          <div className="relative md:absolute md:left-[55%] lg:left-1/2 xl:left-2/5 md:translate-y-0 translate-y-[-1%] md:-translate-x-full flex flex-col items-center justify-center">
            <div className="w-42.5 h-42.5 md:w-70.5 md:h-70.5"></div>
            <Image
              alt="Diamond Large"
              width={382}
              height={382}
              className="diamond-large absolute w-67.5 h-67.5 md:w-120.5 md:h-120.5 rotate-200"
              src="/placeholders/res-diamond-large.svg"
            />
            <Image
              alt="DiamondMedium"
              width={444}
              height={444}
              className="diamond-medium absolute w-57.5 h-57.5 md:w-111.085 md:h-111.085 rotate-190"
              src="/placeholders/res-diamond-medium.svg"
            />
            <Image
              alt="DiamondSmall"
              width={405}
              height={405}
              className="diamond-small absolute w-47.5 h-47.5 md:w-101.295 md:h-101.295"
              src="/placeholders/res-diamond-small.svg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                alt="Camera Icon"
                width={136}
                height={136}
                className="absolute w-25 h-25 md:w-34 md:h-34 hover:scale-108 duration-700 ease-in-out cursor-pointer"
                src="/placeholders/camera-icon.svg"
              />
              <div className="absolute bottom-[1%] right-22.5 md:top-[30.9%] md:-right-3 -translate-y-5">
                <p className="text-xs md:text-sm font-normal mt-1 leading-6">
                  ALLOW A.I.
                  <br />
                  TO SCAN YOUR FACE
                </p>
                <Image
                  alt="Scan Line"
                  width={66}
                  height={59}
                  className="absolute hidden md:block md:right-35.75 md:top-5"
                  src="/placeholders/res-scan-line.svg"
                />
              </div>
            </div>
          </div>
          <div className="relative md:absolute md:left-[45%] lg:left-1/2 xl:left-[55%] flex flex-col items-center mt-12 md:mt-0 justify-center md:translate-y-0 translate-y-[-10%] transition-opacity duration-300 opacity-100">
            <div className="w-42.5 h-42.5 md:w-70.5 md:h-70.5"></div>
            <Image
              alt="Diamond Large"
              width={382}
              height={382}
              className="diamond-large absolute w-67.5 h-67.5 md:w-120.5 md:h-120.5 rotate-205"
              src="/placeholders/res-diamond-large.svg"
            />
            <Image
              alt="DiamondMedium"
              width={444}
              height={444}
              className="diamond-medium absolute w-57.5 h-57.5 md:w-111.085 md:h-111.085 rotate-195"
              src="/placeholders/res-diamond-medium.svg"
            />
            <Image
              alt="DiamondSmall"
              width={405}
              height={405}
              className="diamond-small absolute w-47.5 h-47.5 md:w-101.295 md:h-101.295"
              src="/placeholders/res-diamond-small.svg"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                alt="Photo Upload Icon"
                width={136}
                height={136}
                className="absolute w-25 h-25 md:w-34 md:h-34 hover:scale-108 duration-700 ease-in-out cursor-pointer"
                src="/placeholders/gallery-icon.svg"
              />
              <div className="absolute top-3/4 md:top-[70%] md:left-4.25 -translate-y-2.5">
                <p className="text-xs md:text-sm font-normal mt-2 leading-6 text-right">
                  ALLOW A.I.
                  <br />
                  ACCESS GALLERY
                </p>
                <Image
                  alt="Gallery Line"
                  width={66}
                  height={59}
                  className="absolute hidden md:block md:left-30 md:bottom-9.75"
                  src="/placeholders/res-gallery-line.svg"
                />
              </div>
            </div>
          </div>
          <div className="absolute -top-18.75 right-7 md:-top-12.5 md:right-8 transition-opacity duration-300 opacity-100">
            <h1 className="text-xs md:text-sm font-normal mb-1">Preview</h1>
            <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden"></div>
          </div>
          <input accept="image/*" className="hidden" type="file" />
        </div>
        <div className="pt-4 md:pt-0 pb-8 bg-white sticky md:static bottom-30.5 mb-0 md:mb-0">
          <div className="absolute bottom-8 w-full flex justify-between md:px-9 px-13">
            <a className="relative" aria-label="Back" href="/testing">
              <div>
                <div className="relative w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-100 sm:hidden">
                  <span className="-rotate-45 text-xs font-semibold sm:hidden">BACK</span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-85 group-hover:scale-92 ease duration-300"></div>
                  <span className="absolute left-3.75 bottom-3.25 scale-90 rotate-180 hidden sm:block group-hover:scale-92 ease duration-300">▶</span>
                  <span className="text-sm font-semibold hidden sm:block ml-6 ">BACK</span>
                </div>
              </div>
            </a>
            <a href="/select">
              <div className="hidden">
                <div>
                  <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-100 sm:hidden">
                    <span className="-rotate-45 text-xs font-semibold sm:hidden">PROCEED</span>
                  </div>
                  <div className="group hidden sm:flex flex-row relative justify-center items-center">
                    <span className="text-sm font-semibold hidden sm:block mr-5">PROCEED</span>
                    <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-85 group-hover:scale-92 ease duration-300"></div>
                    <span className="absolute right-3.75 bottom-3.25 scale-90 hidden sm:block group-hover:scale-92 ease duration-300">▶</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Results;
