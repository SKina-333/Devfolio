import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectSection() {
  const container = useRef();
  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end:"200%",
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          markers:true
        },
      });

      tl.to("#box1", { duration: 1, x:-2150, ease:"none"},0 );
      tl.to("#box2", { duration: 1, x: -2150 ,ease:"none"},0);
      tl.to("#box3", { duration: 1, x: -2150, ease:"none"},0);
      tl.to("#box4", { duration: 1, x:-2150, ease:"none"},0 );
      tl.to("#box5", { duration: 1, x: -2150 ,ease:"none"},0);
      tl.to("#box6", { duration: 1, x: -2150, ease:"none"},0);
      
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="h-screen lg:w-1/2 w-full flex flex-col justify-center gap-5 p-5 border border-white"
    >
      <div className="flex flex-col gap-5">
        <p className="lg:text-6xl text-3xl font-bold font-Poppins">My Project</p>
        <p className="lg:text-2xl text-lg font-Poppins">Projects that I have worked on</p>
      </div>
      <div className="w-full h-1/2 border border-b-white flex flex-row overflow-hidden gap-5">
        <div id="box1" className="bg-red-600 aspect-square"></div>
        <div id="box2" className="bg-blue-600 aspect-square"></div>
        <div id="box3" className="bg-green-600 aspect-square"></div>
        <div id="box4" className="bg-red-600 aspect-square"></div>
        <div id="box5" className="bg-blue-600 aspect-square"></div>
        <div id="box6" className="bg-green-600 aspect-square"></div>
      </div>
    </div>
  );
}
