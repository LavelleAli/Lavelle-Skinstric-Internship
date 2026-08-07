"use client";
import { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navBar/page";
import { VscCircleSmall } from "react-icons/vsc";

const Results = () => {
  const containerRef = useRef(null);
  const [camera, setCamera] = useState(false)

  function handleCameraModal() {
    setCamera(true)
  }

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
        <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-16 md:space-y-0">
          <div className="relative md:absolute md:left-[60%] lg:left-[45%] xl:left-2/6 md:translate-y-0 translate-y-[-1%] md:-translate-x-full flex flex-col items-center justify-center ">
            <div className="w-67.5 h-67.5 md:w-90.5 md:h-90.5"></div>

            <div className="diamond-large absolute top-0 border-4 border-dotted border-[#d4d4d439] w-90 h-90  "></div>

            <div className="diamond-medium absolute top-[-2px] border-4 border-dotted border-[#90909041] w-85 h-85  "></div>

            <div className="diamond-small absolute top-6 border-4 border-dotted border-[#cccccc] w-75 h-75  "></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center  ">
              <Image
                alt="Camera Icon"
                width={136}
                height={136}
                className="absolute w-25 h-25 md:w-34 md:h-34 hover:scale-108 duration-700 ease-in-out cursor-pointer"
                src="/camera.png"
                onClick={() => setCamera(true)}
              />
              <div className="absolute bottom-[1%] right-22.5 md:top-[30.9%] md:-right-3 -translate-y-5">
                <p className="relative right-[-60px] top-[-30px] text-xs md:text-sm font-normal mt-1 leading-6 ">
                  ALLOW A.I.
                  <br />
                  TO SCAN YOUR FACE
                </p>
                <Image
                  alt="Scan Line"
                  width={66}
                  height={59}
                  className="absolute rotate-180 hidden md:block md:right-22 md:top-[-10px]"
                  src="/Vector 1.png"
                />
                <VscCircleSmall
                  className="absolute rotate-180 hidden md:block md:right-19.5 md:top-[-19px]"
                  width={50}
                  height={50}
                />

                <div className={` allowCameraModal absolute left-16 w-100 h-35 bg-black flex ${camera ? "" : "hidden"} `}>
                  <p className=" relative top-8 text-white font-semibold ml-6 ">
                    ALLOW A.I. TO ACCESS YOUR CAMERA
                  </p>
                  <div className="divider absolute bottom-8 border-b border-white w-full "></div>

                  <div className=" cameraOptions absolute bottom-0 flex justify-end w-full text-white text-[15px]  ">
                    <button
                      className="mr-12 text-[#949494] cursor-pointer hover:text-[#717171]"
                      onClick={() => setCamera(false)}
                    >
                      DENY
                    </button>
                    <Link
                      href="/camera"
                      className="mr-5 cursor-pointer font-semibold hover:text-[#9b9b9b]"
                    >
                      ALLOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:absolute md:left-[40%] lg:left-[55%] xl:left-[65%] flex flex-col items-center mt-12 md:mt-0 justify-center md:translate-y-0 translate-y-[-10%] transition-opacity duration-300 opacity-100">
            <div className="w-42.5 h-42.5 md:w-70.5 md:h-70.5"></div>

            <div className="diamond-large absolute top-[-18px] border-4 border-dotted border-[#d4d4d439] w-90 h-90"></div>

            <div className="diamond-medium absolute top-[-12px] border-4 border-dotted border-[#90909041] w-85 h-85"></div>

            <div className="diamond-small absolute top-3 border-4 border-dotted border-[#cccccc] w-75 h-75"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Image
                alt="Photo Upload Icon"
                width={136}
                height={136}
                className="absolute w-25 h-25 md:w-34 md:h-34 hover:scale-108 duration-700 ease-in-out cursor-pointer"
                src="/gallery.png"
              />
              <div className="absolute top-3/4 md:top-[70%] md:left-4.25 -translate-y-2.5">
                <p className=" absolute top-12 left-[-100px] w-30 text-xs md:text-sm font-normal mt-2 leading-6 text-right">
                  ALLOW A.I.
                  <br />
                  ACCESS GALLERY
                </p>
                <Image
                  alt="Gallery Line"
                  width={66}
                  height={59}
                  className="relative hidden md:block md:left-6 md:bottom-0"
                  src="/Vector 1.png"
                />
                <VscCircleSmall
                  className="absolute rotate-180 hidden md:block md:left-3.5 md:top-13"
                  width={50}
                  height={50}
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
                  <span className="-rotate-45 text-xs font-semibold sm:hidden">
                    BACK
                  </span>
                </div>
                <div className="group hidden sm:flex flex-row relative justify-center items-center">
                  <div className="w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-85 group-hover:scale-92 ease duration-300"></div>
                  <span className="absolute left-3.75 bottom-3.25 scale-90 rotate-180 hidden sm:block group-hover:scale-92 ease duration-300">
                    ▶
                  </span>
                  <span className="text-sm font-semibold hidden sm:block ml-6 ">
                    BACK
                  </span>
                </div>
              </div>
            </a>
            <a href="/select">
              <div className="hidden">
                <div>
                  <div className=" w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-100 sm:hidden">
                    <span className="-rotate-45 text-xs font-semibold sm:hidden">
                      PROCEED
                    </span>
                  </div>
                  <div className="group hidden sm:flex flex-row relative justify-center items-center">
                    <span className="text-sm font-semibold hidden sm:block mr-5">
                      PROCEED
                    </span>
                    <div className=" w-12 h-12 hidden sm:flex justify-center border border-[#1A1B1C] rotate-45 scale-85 group-hover:scale-92 ease duration-300"></div>
                    <span className="absolute right-3.75 bottom-3.25 scale-90 hidden sm:block group-hover:scale-92 ease duration-300">
                      ▶
                    </span>
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
