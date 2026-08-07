"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Camera = () => {
  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        // Permission confirmed here — /camera/capture requests its own stream,
        // so this one's only purpose was the permission prompt.
        stream.getTracks().forEach((track) => track.stop());
        if (!cancelled) router.push("/camera/capture");
      })
      .catch(() => {
        if (!cancelled) router.push("/results");
      });

    return () => {
      cancelled = true;
    };
  }, [router]);

  useGSAP(
    () => {
      gsap.to(".loading-dot", {
        y: -10,
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        stagger: 0.15,
        ease: "power1.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center bg-white"
    >
      <div className="flex items-center justify-center gap-3 h-24">
        <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
        <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
        <span className="loading-dot w-2 h-2 rounded-full bg-[#a2a2a2]"></span>
      </div>
    </div>
  );
};

export default Camera;
