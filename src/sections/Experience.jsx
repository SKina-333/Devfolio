import React, { useRef } from "react";

export default function Experience() {
  return (
    <div className="h-screen p-16">
      <h2 className="text-7xl font-Poppins font-bold">Experience</h2>
      <div className=" mt-36  flex flex-col gap-10 overflow-clip relative">
        <div className="flex flex-col">
          <h4 className="font-Poppins font-bold text-4xl">Monash University</h4>
          <h5 className="font-Anonymous font-semibold text-2xl">Education</h5>
          <p className="font-Poppins text-xl">Major Software Development</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-Poppins font-bold text-4xl">
            University of Colorado Boulder
          </h4>
          <h5 className="font-Anonymous font-semibold text-2xl">Education</h5>
          <p className="font-Poppins text-xl">Major Project Mangement</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-Poppins font-bold text-4xl">ACET GLOBAL</h4>
          <h5 className="font-Anonymous font-semibold text-2xl">
            Internship Program
          </h5>
          <p className="font-Poppins text-xl">Role Web developer</p>
        </div>

        <div className="flex flex-row justify-between mt-20">
          <div className="bg-contain bg-no-repeat bg-Monash h-[130px] w-[400px]"></div>
          <div className="bg-contain bg-no-repeat bg-Colorado h-[130px] w-[400px]"></div>
          <div className="bg-contain bg-no-repeat bg-ACET h-[130px] w-[400px]"></div>
        </div>
        <h3 className="text-8xl font-Poppins font-bold absolute -right-16 -rotate-90 top-32">
          2024
        </h3>
      </div>
    </div>
  );
}
