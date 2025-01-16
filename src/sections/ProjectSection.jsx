import { div } from "motion/react-client";
import React, { useRef } from "react";

export default function ProjectSection() {
  return (
    <div className="h-screen p-16 ">
      <h2 className="text-7xl font-Poppins font-bold">Projects</h2>
      <div className="flex flex-row gap-20 mt-36 ">
        <div className="flex flex-col gap-5 ">
          <div className="h-[250px] w-[250px] bg-Chat bg-cover rounded-xl"></div>
          <div className="font-Anonymous text-2xl">Chat Application</div>
          <div className="font-Poppins text-[#CDD5E3] flex flex-col">
            <div>Tags:</div>
            <div>Description</div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="rounded-full  px-12 py-2.5 font-Poppins font-sm border border-white">Visit Site</button>
            <button className="h-[55px] w-[55px] rounded-full border border-white"></button>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative top-32 ">
          <div className="h-[250px] w-[250px] bg-Gym bg-cover rounded-xl"></div>
          <div className="font-Anonymous text-2xl">Gym Tracker</div>
          <div className="font-Poppins text-[#CDD5E3] flex flex-col">
            <div>Tags:</div>
            <div>Description</div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="rounded-full  px-12 py-2.5 font-Poppins font-sm border border-white">Visit Site</button>
            <button className="h-[55px] w-[55px]  rounded-full border border-white "></button>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-[250px] ">
          <div className="h-[250px] w-[250px] bg-Cart bg-cover rounded-xl"></div>
          <div className="font-Anonymous text-2xl w-full text-wrap">Add to Cart & Stripe</div>
          <div className="font-Poppins text-[#CDD5E3] flex flex-col">
            <div>Tags:</div>
            <div>Description</div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="rounded-full  px-12 py-2.5 font-Poppins font-sm border border-white">Visit Site</button>
            <button className="h-[55px] w-[55px] rounded-full border border-white"></button>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative top-32  ">
          <div className="h-[250px] w-[250px] bg-Sketch bg-cover rounded-xl"></div>
          <div className="font-Anonymous text-2xl">Sketch Book</div>
          <div className="font-Poppins text-[#CDD5E3] flex flex-col">
            <div>Tags:</div>
            <div>Description</div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="rounded-full  px-12 py-2.5 font-Poppins font-sm border border-white">Visit Site</button>
            <button className="h-[55px] w-[55px] rounded-full border border-white"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
