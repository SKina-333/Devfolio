import { div } from "motion/react-client";
import React, { useRef } from "react";

export default function ProjectSection() {
  return (
    <div className="h-screen p-16 ">
      <h2 className="2xl:text-7xl text-6xl font-Poppins font-bold">Projects</h2>
      <div className="flex flex-row gap-20 2xl:mt-36 mt-10">
        <div className="flex flex-col gap-5 border border-white">
          <div className="2xl:h-[250px] 2xl:w-[250px] h-[150px] w-[150px] bg-Chat bg-cover rounded-xl"></div>
          <div className="font-Anonymous 2xl:text-2xl text-lg">
            Chat Application
          </div>
          <div className="font-Poppins text-[#CDD5E3] flex flex-col 2xl:text-lg text-sm">
            <div>Tags:</div>
            <div>Description</div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="rounded-full 2xl:px-12 2xl:py-2.5 px-8 py-0 font-Poppins font-sm border border-white 2xl:text-lg text-xs">
              Visit Site
            </button>
            <button className="2xl:h-[55px] 2xl:w-[55px] h-[30px] w-[30px] rounded-full border border-white"></button>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative top-32 border border-white">
          <div className="2xl:h-[250px] 2xl:w-[250px] h-[150px] w-[150px] bg-Gym bg-cover rounded-xl"></div>
          <div className="font-Anonymous 2xl:text-2xl text-lg">Gym Tracker</div>
          <div className="font-Poppins text-[#CDD5E3] flex flex-col 2xl:text-lg text-sm">
            <div>Tags:</div>
            <div>Description</div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="rounded-full  2xl:px-12 2xl:py-2.5 px-8 py-0 font-Poppins font-sm border border-white 2xl:text-lg text-xs">
              Visit Site
            </button>
            <button className="2xl:h-[55px] 2xl:w-[55px] h-[30px] w-[30px]  rounded-full border border-white "></button>
          </div>
        </div>
        <div className="flex flex-col gap-5 2xl:w-[250px] w-[150px] border border-white">
          <div className="2xl:h-[250px] 2xl:w-[250px] h-[150px] w-[150px] bg-Cart bg-cover rounded-xl"></div>
          <div className="font-Anonymous 2xl:text-2xl text-lg text-wrap">
            Add to Cart & Stripe
          </div>
          <div className="font-Poppins text-[#CDD5E3] flex flex-col 2xl:text-lg text-sm">
            <div>Tags:</div>
            <div>Description</div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="rounded-full 2xl:px-12 2xl:py-2.5 px-8 py-0 font-Poppins font-sm border border-white 2xl:text-lg text-xs">
              Visit Site
            </button>
            <button className="2xl:h-[55px] 2xl:w-[55px]  h-[30px] w-[30px] rounded-full border border-white"></button>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative top-32  ">
          <div className="2xl:h-[250px] 2xl:w-[250px] h-[150px] w-[150px] bg-Sketch bg-cover rounded-xl"></div>
          <div className="font-Anonymous 2xl:text-2xl text-lg">Sketch Book</div>
          <div className="font-Poppins text-[#CDD5E3] flex flex-col 2xl:text-lg text-sm">
            <div>Tags:</div>
            <div>Description</div>
          </div>
          <div className="flex flex-row justify-between">
            <button className="rounded-full 2xl:px-12 2xl:py-2.5 px-8 py-0 font-Poppins font-sm border border-white 2xl:text-lg text-xs">
              Visit Site
            </button>
            <button className="2xl:h-[55px] 2xl:w-[55px]  h-[30px] w-[30px] rounded-full border border-white"></button>
          </div>
        </div>
      </div>
    </div>
  );
}
