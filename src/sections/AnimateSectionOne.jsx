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
        duration: 0.2,
        color: "#ffffff",
        scrollTrigger: {
          trigger: "#textBoxOne",
          start: "top bottom",
          end:"top",
          toggleActions: "play reverse restart restart",
         
        },
        ease: "power1.inOut",
      });
      gsap.to("#textBoxTwo", {
        duration: 0.2,
        color: "#ffffff",
        scrollTrigger: {
          trigger: "#textBoxTwo",
          start: "top center",
          toggleActions: "play none none reverse",
          
        },
        ease: "power1.inOut",
      });
      
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="lg:h-screen flex flex-col lg:w-1/2 font-bold text-4xl sm:text-6xl 2xl:text-8xl"
    >
      <div id="textBoxOne" className="text-gray-800 h-1/2 flex flex-row items-end justify-center">
        <p className="font-Poppins p-5">
          I thrive on bringing ideas to life through code and design.
        </p>
      </div>

      <div id="textBoxTwo" className="text-gray-800 h-1/2 flex flex-row items-start justify-center">
        <p className="font-Playfair p-5">
          Passionate about turning complex problems into simple, beautiful
          solutions.
        </p>
      </div>
    </div>
  );
}
