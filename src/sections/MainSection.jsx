import React, { useRef } from "react";
import NavComponent from "../components/NavComponent";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MainSection() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: 1, repeatDelay: 2});
      tl.fromTo(
        "#containerOne", 
        { x: '-100%' }, 
        {
          x: '100%',
          duration: 35, 
          repeat: -1, 
          ease: "none",
          
        },
        
      );
      tl.fromTo(
        "#containerTwo", 
        { x: '-100%' }, 
        {
          x: '100%',
          duration: 35, 
          repeat: -1, 
          ease: "none", 
        },"-=16"
      );
    },
    { scope: container }
  );
  return (
    <div className="lg:h-screen overflow-x-hidden text-nowrap flex flex-col w-full lg:gap-0 gap-64 mb-24">
      <NavComponent />
      <section
        
        className="grow flex flex-col justify-center items-center"
      >
        <h3 className="font-Poppins text-center cursor-default">
          {["S", "o", "k", "i", "n", "a", " ", "H", "o"].map((char, index) => (
            <span
              key={index}
              className="inline-block text-6xl font-bold transform transition-transform duration-200 ease-in-out hover:-translate-y-4  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#0093E9] to-[#80D0C7] to-60%"
            >
              {char}
            </span>
          ))}
        </h3>
        <p className="font-Poppins text-xl relative sm:left-20 cursor-default ">
          A{" "}
          <span className="font-Dancing text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-[#85FFBD] to-[#FFFB7D] ">
            Junior
          </span>{" "}
          Web{" "}
          <span className="font-Playfair text-transparent bg-clip-text bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
            Developer
          </span>
        </p>
      </section>
      <div ref={container} className="flex flex-row overflow-x-hidden text-nowrap w-full relative border border-purple-50 2xl:h-36 lg:h-20 h-10">
        <div
          id="containerOne"
          className="absolute border border-white text-nowrap overflow-hidden flex flex-row 2xl:text-9xl 2xl:gap-80 gap-20 lg:text-6xl text-4xl font-bold text-gray-600 will-change-transform "
        >
          <p className="">Front-end developer. </p>
          <p className="">Back-end developer. </p>
          <p className="">UI/UX Design.</p>
          <p className="pr-96">Animation.</p>
        </div>
        <div
          id="containerTwo"
          className="absolute border border-green-500 text-nowrap overflow-hidden flex flex-row 2xl:text-9xl 2xl:gap-80 gap-20 lg:text-6xl text-4xl font-bold text-gray-600 will-change-transform "
        >
          <p className="pl-96">Front-end developer. </p>
          <p className="">Back-end developer. </p>
          <p className="">UI/UX Design.</p>
          <p className="">Animation.</p>
        </div>
      </div>
    </div>
  );
}
