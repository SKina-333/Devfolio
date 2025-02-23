import React, { useRef } from "react";
import { useCursorHoverContext } from "../sections/contexts/cursorHoverContext.jsx";
  

export default function Experience() {
  const { setIsHovering, setImageText } = useCursorHoverContext();
  return (
    <div className="h-screen p-16 ">
      <h2 className="2xl:text-7xl text-6xl font-Poppins font-bold">Experience</h2>
      <div className=" 2xl:mt-36 mt-10 flex flex-col 2xl:gap-10 gap-5 overflow-clip relative">
        <div className="flex flex-col">
          <h4 className="font-Poppins font-bold 2xl:text-4xl text-2xl">Monash University</h4>
          <h5 className="font-Anonymous font-semibold 2xl:text-2xl text-lg">Education</h5>
          <p className="font-Poppins 2xl:text-xl text-md">Major Software Development</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-Poppins font-bold 2xl:text-4xl text-2xl">
            University of Colorado Boulder
          </h4>
          <h5 className="font-Anonymous font-semibold 2xl:text-2xl text-lg">Education</h5>
          <p className="font-Poppins 2xl:text-xl text-md">Major Project Mangement</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-Poppins font-bold 2xl:text-4xl text-2xl">ACET GLOBAL</h4>
          <h5 className="font-Anonymous font-semibold 2xl:text-2xl text-lg">
            Internship Program
          </h5>
          <p className="font-Poppins 2xl:text-xl text-md">Role Web developer</p>
        </div>

        <div className="flex flex-row justify-evenly 2xl:mt-20 mt-6">
          <div className="bg-contain bg-no-repeat bg-Monash 2xl:h-[130px] 2xl:w-[400px] h-[80px] w-[240px]"
            onMouseEnter={() => {
              setIsHovering(true);
              setImageText("3 years bachelor program");
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setImageText("");
            }}
          ></div>
          <div className="bg-contain bg-no-repeat bg-Colorado 2xl:h-[130px] 2xl:w-[400px] h-[80px] w-[240px]"
            onMouseEnter={() => {
              setIsHovering(true);
              setImageText("3 months certificate program");
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setImageText("");
            }}
          ></div>
          <div className="bg-contain bg-no-repeat bg-ACET 2xl:h-[130px] 2xl:w-[400px] h-[80px] w-[240px]"
            onMouseEnter={() => {
              setIsHovering(true);
              setImageText("3 months internship program");
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setImageText("");
            }}
          ></div>
        </div>
        <h3 className="2xl:text-8xl text-7xl font-Poppins font-bold absolute -right-16 -rotate-90 2xl:top-32 top-24">
          2024
        </h3>
      </div>
    </div>
  );
}
