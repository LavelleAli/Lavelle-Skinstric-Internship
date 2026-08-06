import { useRef } from "react";
import Link from "next/link";
import { MdArrowRight } from "react-icons/md";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ProceedButton = ({ step }) => {
  const proceedRef = useRef(null);

  useGSAP(
    () => {
      if (step !== "done" || !proceedRef.current) return;
      gsap.fromTo(
        proceedRef.current,
        { x: -40 },
        { x: 0, duration: 0.6, ease: "power2.out" },
      );
    },
    { dependencies: [step] },
  );

  return (
    <>
      {step === "done" && (
        <Link href="/results">
          <div className="absolute right-10 bottom-0 w-12 h-12 flex items-center justify-center border border-[#1A1B1C] rotate-45 scale-[1] sm:hidden">
            <span className="rotate-[-45deg] text-[10px] font-semibold">
              Proceed
            </span>
          </div>

          <button
            ref={proceedRef}
            className="hidden sm:flex absolute right-10 bottom-0 items-center gap-15 cursor-pointer group "
          >
            <span className="relative text-[16px] font-semibold">Proceed</span>
            <div className="absolute right-10 bottom-0 w-12 h-12 hidden sm:flex justify-center border border-[1A1B1...e-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300 rotate-45 "></div>
            <MdArrowRight className="hidden sm:block relative right-10 text-5xl group-hover:scale-105 transform-transition duration 300" />
          </button>
        </Link>
      )}
    </>
  );
};

export default ProceedButton;
