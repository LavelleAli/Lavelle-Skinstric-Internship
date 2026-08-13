import React from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const BackButton = ({ className = "" }) => {
  return (
    <>
      <div
        className={`group hidden sm:flex flex-row relative justify-center items-center ${className}`}
      >
        <div className="w-12 h-12 hidden sm:flex justify-center border border-[1A1B1...e-45 scale-[0.85] group-hover:scale-[0.92] ease duration-300 rotate-45 "></div>
        <span className="absolute left-[15px] bottom-[13px] scale-[0.9] rotate-180 hidden sm:block group-hover:scale-[0.92] ease duration-300"></span>
        <MdArrowLeft className="absolute left-[-2px] text-5xl" />
        <span className="text-md font-semibold hidden sm:block ml-6">Back</span>
      </div>
    </>
  );
};

export default BackButton;
