import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AnimateSectionOne() {
  const container = useRef();
  useGSAP(
    () => {
      gsap.to("#textBoxOne", {
        duration: 0.5,
        color: "#4b5563",
        scrollTrigger: {
          trigger: "#textBoxOne",
          start: "top 40%",
          toggleActions: "play pause pause reverse"
        },
        ease: "power1.out",
      });
      gsap.to("#textBoxTwo", {
        duration: 0.5,
        color: "#ffffff",
        scrollTrigger: {
          trigger: "#textBoxTwo",
          start: "-65% 40%",
          toggleActions: "play pause pause reverse"
        },
        ease: "power1.out",
      });
      
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="h-screen flex flex-col justify-center items-center w-1/2 text-8xl font-bold "
    >
      <div id="textBoxOne" className="text-white">
        <p className="font-Poppins">
          I thrive on bringing ideas to life through code and design.
        </p>
      </div>

      <div id="textBoxTwo" className="text-gray-600">
        <p className="font-Playfair">
          Passionate about turning complex problems into simple, beautiful
          solutions.
        </p>
      </div>
    </div>
  );
}
