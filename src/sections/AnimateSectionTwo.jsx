import React from "react";
import waterfall from "../assets/waterfall-method.svg";
import agile from "../assets/agile-method.svg";

export default function AnimateSectionTwo() {
  return (
    <div className="h-screen flex flex-row items-center w-1/2 gap-10">
      <div className="flex flex-col gap-8 w-3/6 ">
        <p className="text-8xl font-bold font-Poppins">Methodology</p>
        <p className="text-2xl font-bold font-Playfair text-left leading-tight ">
          Hands-on experience with the structured approach of{" "}
          <span className="font-Dancing">Waterfall</span> and the dynamic
          flexibility of <span className="font-Dancing">Agile</span>, allowing
          me to adapt to diverse project needs and deliver effective solutions
        </p>
      </div>
      <div className="flex flex-row grow items-start ">
        <div className="w-1/2 aspect-square">
          <img
            src={waterfall}
            alt="waterfall methodology logo"
            className="w-full h-full object-contain scale-150"
          />
        </div>
        <div className="w-1/2 aspect-square">
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
