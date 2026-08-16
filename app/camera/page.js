"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import RotatingSquares from "@/components/RotatingSquares/RotatingSquares";

const Camera = () => {
  const router = useRouter();
  const loadingBar = useRef(null);

  useEffect(() => {
    let cancelled = false;

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
  
        stream.getTracks().forEach((track) => track.stop());
        if (!cancelled) router.push("/camera/capture");
      })
      .catch(() => {
        if (!cancelled) router.push("/results?cameraDenied=true");
      });

    return () => {
      cancelled = true;
    };
  }, [router]);

  useGSAP(
    () => {
      gsap.fromTo(
        loadingBar.current,
        { width: "100%" },
        { width: "0%", duration: 10, ease: "power1.inOut", },
      );
    },
    { scope: loadingBar },
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <RotatingSquares
        largeClassName="relative top-[-40px] w-100 h-100 border-5 border-dotted border-[#c8c8c840]"
        mediumClassName="w-90 h-90 border-4 border-[#d4d4d4] border-dotted"
        smallClassName="w-80 h-80 border-4 border-dotted border-[#959595]"
        durations={{ large: 60, medium: 60, small: 190 }}
      />

      <div className="absolute top-60 text-center text-xl font-semibold flex flex-col items-center gap-10">
        <Image src={"/camera.png"} width={130} height={120} alt="Camera" />
        <h2>SETTING UP CAMERA ...</h2>
      </div>

      <div className="realtive top-1/2  flex flex-col items-center text-l gap-10 ">
        TO GET BETTER RESULTS MAKE SURE TO HAVE
        <ul className="flex gap-10">
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 shrink-0 bg-[url(/Rectangle%202681.png)] bg-contain bg-no-repeat" />
            NEUTRAL EXPRESSION
          </li>
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 shrink-0 bg-[url(/Rectangle%202681.png)] bg-contain bg-no-repeat" />
            FRONTAL POSE
          </li>
          <li className="flex items-center gap-2">
            <span className="w-3 h-3 shrink-0 bg-[url(/Rectangle%202681.png)] bg-contain bg-no-repeat" />
            ADEQUATE LIGHTING
          </li>
        </ul>
      </div>

      <div className="loadingBarContainer w-150 h-5 border-2 border-[#dddddd68] border-l-0 border-r-0 mt-20 flex items-center">
        <div className="loadingBarProgress w-150 h-2 bg-[#b5b5b5] rounded-2xl " ref={loadingBar}></div>

      </div>
    </div>
  );
};

export default Camera;
