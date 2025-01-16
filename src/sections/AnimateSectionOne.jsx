import React, { useRef } from "react";


export default function AnimateSectionOne() {
  
  return (
    <div
      
      className="h-screen flex flex-col font-bold text-6xl p-28"
    >
      <div id="textBoxOne" className="text-white h-1/2 flex flex-row items-end justify-center">
        <p className="font-Poppins p-5">
          I thrive on bringing ideas to life through code and design.
        </p>
      </div>

      <div id="textBoxTwo" className="text-white h-1/2 flex flex-row items-start justify-center">
        <p className="font-Playfair p-5">
          Passionate about turning complex problems into simple, beautiful
          solutions.
        </p>
      </div>
    </div>
  );
}
