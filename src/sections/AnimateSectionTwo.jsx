import React, { useRef } from "react";
import waterfall from "../assets/waterfall-method.svg";
import agile from "../assets/agile-method.svg";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AnimateSectionTwo() {
  const container = useRef();
  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          toggleActions: "play pause resume none",
        
        },
        repeat: -1,
      });
      tl.to("#agile", {
        duration: 10,
        keyframes: {
          "0%": { x: -100, opacity: 0 },
          "25%": { x: 0, opacity: 1, ease: "Power4.in", delay: 3 },
          "50%": { x: 0, opacity: 1, ease: "Power4.in", delay: 3 },
          "75%": { x: 0, opacity: 1, ease: "Power4.Out", delay: 3 },
          "100%": { x: 100, opacity: 0 },
        },
      });
      tl.to("#waterfall", {
        duration: 10,
        keyframes: {
          "0%": { x: -100, opacity: 0 },
          "25%": { x: 0, opacity: 1, ease: "Power4.in", delay: 3 },
          "50%": { x: 0, opacity: 1, ease: "Power4.in", delay: 3 },
          "75%": { x: 0, opacity: 1, ease: "Power4.Out", delay: 3 },
          "100%": { x: 100, opacity: 0 },
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="h-screen flex flex-row items-center w-1/2 gap-10 p-2 text-nowrap"
    >
      <div className="flex flex-col gap-8 w-3/6 ">
        <p className="text-1xl font-bold font-Poppins">Methodology</p>
        <p className="text-xl font-bold font-Playfair text-left leading-tight text-wrap">
          Hands-on experience with the structured approach of{" "}
          <span className="font-Dancing">Waterfall</span> and the dynamic
          flexibility of <span className="font-Dancing">Agile</span>, allowing
          me to adapt to diverse project needs and deliver effective solutions
        </p>
      </div>
      <div className="flex flex-row grow items-start ">
        <div
          id="waterfall"
          className="w-1/2 aspect-square relative left-1/2 opacity-0 "
        >
          <img
            src={waterfall}
            alt="waterfall methodology logo"
            className="w-full h-full object-contain scale-150"
          />
        </div>
        <div id="agile" className="w-1/2 aspect-square ">
          <img
            src={agile}
            alt="agile methodology logo"
            className="w-full h-full object-contain scale-150"
          />
        </div>
      </div>
    </div>
  );
}
