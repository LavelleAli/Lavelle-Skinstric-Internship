"use client";
import { useState, useSyncExternalStore } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navBar/page";
import RotatingSquares from "@/components/RotatingSquares/RotatingSquares";
import { VscCircleSmall } from "react-icons/vsc";

function noopSubscribe() {
  return () => {};
}

function getCameraDenied() {
  return new URLSearchParams(window.location.search).get("cameraDenied") === "true";
}

function getServerCameraDenied() {
  return false;
}

const Results = () => {
  const router = useRouter();
  const containerRef = useRef(null);
  const [camera, setCamera] = useState(false);
  const [fileSelect, setFileSelect] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const cameraDenied = useSyncExternalStore(
    noopSubscribe,
    getCameraDenied,
    getServerCameraDenied,
  );
  const openGalleryRef = useRef(null);

  function handleUserGallery(event) {
    const file = event.target.files[0];
    setFileSelect(URL.createObjectURL(file));
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowToast(true);
    }, 2500);
  }

  function handleToastOk() {
    setShowToast(false);
    router.push("/select");
  }

  useGSAP(
    () => {
      if (!analyzing) return;
      gsap.to(".loading-dot", {
        y: -10,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef, dependencies: [analyzing] },
  );

  return (
    <>
      <NavBar />
      <div
        ref={containerRef}
        className="min-h-[92vh] flex flex-col bg-white relative md:pt-16 justify-center"
      >
        {!analyzing && !showToast && (
          <>
        <div className="absolute top-2 left-9 md:left-8 text-left">
          <p className="font-semibold text-xs md:text-sm">TO START ANALYSIS</p>
          {cameraDenied && (
            <p className="text-[12px] text-red-600 mt-1 max-w-60">
              Please allow camera access for photo submission, or upload a
              picture from your gallery instead.
            </p>
          )}
        </div>
        <div className="flex-[0.4] md:flex-1 flex flex-col md:flex-row items-center xl:justify-center relative mb-0 md:mb-30 space-y-16 md:space-y-0">
          <div className="relative md:absolute md:left-[60%] lg:left-[45%] xl:left-2/6 md:translate-y-0 translate-y-[-1%] md:-translate-x-full flex flex-col items-center justify-center ">
            <div className="w-67.5 h-67.5 md:w-90.5 md:h-90.5"></div>

            <RotatingSquares
              layout="layered"
              largeClassName="absolute top-0 border-4 border-dotted border-[#d4d4d439] w-90 h-90"
              mediumClassName="absolute top-[-2px] border-4 border-dotted border-[#90909041] w-85 h-85"
              smallClassName="absolute top-6 border-4 border-dotted border-[#cccccc] w-75 h-75"
              durations={{ large: 40, medium: 50, small: 60 }}
            />

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
                <p className="relative -right-15 -top-7.5 text-xs md:text-sm font-normal mt-1 leading-6 ">
                  ALLOW A.I.
                  <br />
                  TO SCAN YOUR FACE
                </p>
                <Image
                  alt="Scan Line"
                  width={66}
                  height={59}
                  className="absolute rotate-180 hidden md:block md:right-22 md:-top-2.5"
                  src="/Vector 1.png"
                />
                <VscCircleSmall
                  className="absolute rotate-180 hidden md:block md:right-19.5 md:-top-4.75"
                  width={50}
                  height={50}
                />

                <div
                  className={` allowCameraModal absolute left-16 w-100 h-35 bg-black flex ${camera ? "" : "hidden"} `}
                >
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

            <RotatingSquares
              layout="layered"
              largeClassName="absolute top-[-18px] border-4 border-dotted border-[#d4d4d439] w-90 h-90"
              mediumClassName="absolute top-[-12px] border-4 border-dotted border-[#90909041] w-85 h-85"
              smallClassName="absolute top-3 border-4 border-dotted border-[#cccccc] w-75 h-75"
              durations={{ large: 40, medium: 50, small: 60 }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={openGalleryRef}
                onChange={handleUserGallery}
              />
              <button
              
                onClick={() => openGalleryRef.current.click()}
                className="absolute w-25 h-25 md:w-34 md:h-34 hover:scale-108 duration-700 ease-in-out cursor-pointer"
              >
                <Image
                  alt="Photo Upload Icon"
                  width={136}
                  height={136}
                  src="/gallery.png"
                  
                />
              </button>
              <div className="absolute top-3/4 md:top-[70%] md:left-4.25 -translate-y-2.5">
                <p className=" absolute top-12 -left-25 w-30 text-xs md:text-sm font-normal mt-2 leading-6 text-right">
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

            <div className="w-24 h-24 md:w-32 md:h-32 border border-gray-300 overflow-hidden">
              {fileSelect && <img src={fileSelect} alt="userImage" className="w-full h-full object-cover" /> }
            </div>

          </div>
          
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
          </>
        )}

        {analyzing && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-white">
            <RotatingSquares
              largeClassName="relative w-150 h-150 border-5 border-dotted border-[#c8c8c840]"
              mediumClassName="w-130 h-130 border-4 border-[#d4d4d4] border-dotted"
              smallClassName="w-105 h-105 border-4 border-dotted border-[#959595]"
              durations={{ large: 20, medium: 40, small: 190 }}
            />
            <div className="absolute flex flex-col items-center gap-6">
              <p className="text-sm sm:text-2xl font-semibold text-center text-[#1A1B1C] tracking-wide">
                PREPARING YOUR ANALYSIS
              </p>
              <div className="flex items-center justify-center gap-3">
                <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
                <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
                <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
              </div>
            </div>
          </div>
        )}

        {showToast && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="relative bg-black text-white w-100 h-35 p-6">
              <p className="font-semibold text-sm md:text-base">
                Image analyzed successfully!
              </p>
              <button
                onClick={handleToastOk}
                className="absolute bottom-6 right-6 text-sm font-semibold cursor-pointer hover:text-[#9b9b9b]"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
