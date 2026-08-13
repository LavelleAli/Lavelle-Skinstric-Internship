"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton/BackButton";
import NavBar from "@/components/navBar/page";
import Image from "next/image";

const Capture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    let activeStream = null;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        activeStream = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Camera access denied or unavailable:", err);
      });

    return () => {
      activeStream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  function handleTakePicture() {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
    setCapturedImage(canvas.toDataURL("image/png"));
  }

  return (
    <>
      <NavBar />
      <div className="relative w-full h-212 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="hidden" />

        <div className="absolute top-1/4 right-0 w-90 h-100 text-white text-[14px] font-bold flex items-center justify-center">
          TAKE PICTURE
          <button
            onClick={handleTakePicture}
            aria-label="Take Picture"
            className="absolute right-10 top-1/2 -translate-y-1/2 w-18 h-18 rounded-full border-2 border-white bg-white cursor-pointer hover:scale-105 transition-transform duration-300 flex justify-center items-center"
          >
            <div className="innerCircle relative rounded-full border-2 border-black w-full h-full flex justify-center items-center">
              <Image
                src={"/cameraCapture.png"}
                width={10}
                height={10}
                alt={"Camera"}
                className="w-8 "
              />
            </div>
          </button>
        </div>

        <div className="absolute top-3/6 left-2/6 w-100 h-100 flex flex-col gap-4 text-white text-[16px] justify-center items-center">
          TO GET BETTER RESULTS MAKE SURE TO HAVE
          <ul className="w-120 flex gap-10 text-[12px]">
            <li className="flex items-center gap-1">
              <span className="w-2 h-2 shrink-0 bg-[url(/Rectangle%202681white.png)] bg-contain bg-no-repeat" />
              NEUTRAL EXPRESSION
            </li>
            <li className="flex items-center gap-1">
              <span className="w-2 h-2 shrink-0 bg-[url(/Rectangle%202681white.png)] bg-contain bg-no-repeat" />
              FRONTAL POSE
            </li>
            <li className="flex items-center gap-1">
              <span className="w-2 h-2 shrink-0 bg-[url(/Rectangle%202681white.png)] bg-contain bg-no-repeat" />
              ADEQUATE LIGHTING
            </li>
          </ul>
        </div>

        <Link href="/results" className="absolute bottom-8 left-9 md:left-8">
          <div className="relative w-12 h-12 flex items-center justify-center border border-white rotate-45 scale-100 sm:hidden">
            <span className="-rotate-45 text-xs font-semibold text-white">
              BACK
            </span>
          </div>
          <BackButton className="text-white" />
        </Link>
      </div>
    </>
  );
};

export default Capture;
