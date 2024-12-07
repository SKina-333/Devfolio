import React, { useRef } from "react";
import NavComponent from "../components/NavComponent";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MainSection() {
  const container = useRef();
  useGSAP(
    () => {
      
    },
    { scope: container }
  );
  return (
    <div className="lg:h-screen min-h-full flex flex-col w-full lg:gap-0 gap-72">
      <NavComponent />
      <section
        ref={container}
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
      <div className="text-center">Animation</div>
    </div>
  );
}
