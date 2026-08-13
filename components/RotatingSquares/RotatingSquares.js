"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const RotatingSquares = ({
  layout = "nested",
  largeClassName = "",
  mediumClassName = "",
  smallClassName = "",
  durations = { large: 60, medium: 60, small: 190 },
}) => {
  const largeRef = useRef(null);
  const mediumRef = useRef(null);
  const smallRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(largeRef.current, {
        rotation: "+=360",
        duration: durations.large,
        repeat: -1,
        ease: "none",
      });
      gsap.to(mediumRef.current, {
        rotation: "+=360",
        duration: durations.medium,
        repeat: -1,
        ease: "none",
      });
      gsap.to(smallRef.current, {
        rotation: "+=360",
        duration: durations.small,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: largeRef },
  );

  if (layout === "layered") {
    return (
      <>
        <div ref={largeRef} className={largeClassName}></div>
        <div ref={mediumRef} className={mediumClassName}></div>
        <div ref={smallRef} className={smallClassName}></div>
      </>
    );
  }

  return (
    <div ref={largeRef} className={`flex justify-center items-center ${largeClassName}`}>
      <div ref={mediumRef} className={`flex justify-center items-center ${mediumClassName}`}>
        <div ref={smallRef} className={smallClassName}></div>
      </div>
    </div>
  );
};

export default RotatingSquares;
