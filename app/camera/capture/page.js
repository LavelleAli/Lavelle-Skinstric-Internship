"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import BackButton from "@/components/BackButton/BackButton";

const TIPS = ["Good Lighting", "Neutral Expression", "No Glasses"];

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
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <canvas ref={canvasRef} className="hidden" />

      <button
        onClick={handleTakePicture}
        aria-label="Take Picture"
        className="absolute right-10 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 border-white cursor-pointer hover:scale-105 transition-transform duration-300"
      ></button>

      <Link href="/results" className="absolute bottom-8 left-9 md:left-8">
        <div className="relative w-12 h-12 flex items-center justify-center border border-white rotate-45 scale-100 sm:hidden">
          <span className="-rotate-45 text-xs font-semibold text-white">
            BACK
          </span>
        </div>
        <BackButton />
      </Link>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white">
        <p className="text-xs md:text-sm font-semibold tracking-wider uppercase mb-3">
          To Get Better Results Make Sure To Have
        </p>
        <div className="flex flex-row gap-6 text-[11px] md:text-xs uppercase tracking-wide text-white/80">
          {TIPS.map((tip) => (
            <span key={tip}>{tip}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capture;
