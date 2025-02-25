import { div } from "motion/react-client";
import React, { useRef } from "react";

export default function ProjectSection() {
  return (
    <div className="h-screen lg:p-16 p-5">
      <h2 className="2xl:text-7xl lg:text-6xl text-4xl font-Poppins font-bold">Projects</h2>
      <div className="flex flex-row lg:gap-20 gap-14 2xl:mt-36 mt-20 flex-wrap items-center">
        <div className="flex flex-col gap-5 ">
          <div className="2xl:h-[250px] 2xl:w-[250px] h-[150px] w-[150px] bg-Chat bg-cover rounded-xl"></div>
          <div className="font-Anonymous 2xl:text-2xl text-lg">
            Chat Application
          </div>

          <div className="flex flex-row ">
            <button
              onClick={() => {
                window.open("https://github.com/SKina-333/chatapplication");
              }}
              className="rounded-full 2xl:px-12 2xl:py-2.5 px-8 py-2 font-Poppins font-sm border border-white 2xl:text-lg text-xs w-full transition hover:bg-white hover:text-black "
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative top-32 ">
          <div className="2xl:h-[250px] 2xl:w-[250px] h-[150px] w-[150px] bg-Gym bg-cover rounded-xl"></div>
          <div className="font-Anonymous 2xl:text-2xl text-lg">Gym Tracker</div>

          <div className="flex flex-row ">
            <button
              onClick={() => {
                window.open("https://github.com/SKina-333/GymTracker-TailwindCSS");
              }}
              className="rounded-full 2xl:px-12 2xl:py-2.5 px-8 py-2 font-Poppins font-sm border border-white 2xl:text-lg text-xs w-full transition hover:bg-white hover:text-black "
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 2xl:w-[250px] w-[150px] ">
          <div className="2xl:h-[250px] 2xl:w-[250px] h-[150px] w-[150px] bg-Cart bg-cover rounded-xl"></div>
          <div className="font-Anonymous 2xl:text-2xl text-lg text-wrap">
            Add to Cart & Stripe
          </div>

          <div className="flex flex-row ">
            <button
              onClick={() => {
                window.open("https://github.com/SKina-333/ShoppingCart-StripeAPI");
              }}
              className="rounded-full 2xl:px-12 2xl:py-2.5 px-8 py-2 font-Poppins font-sm border border-white 2xl:text-lg text-xs w-full transition hover:bg-white hover:text-black "
            >
              Visit Site
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-5 relative top-32  ">
          <div className="2xl:h-[250px] 2xl:w-[250px] h-[150px] w-[150px] bg-Sketch bg-cover rounded-xl"></div>
          <div className="font-Anonymous 2xl:text-2xl text-lg">Sketch Book</div>

          <div className="flex flex-row ">
            <button
              onClick={() => {
                window.open("https://github.com/SKina-333/SketchProject");
              }}
              className="rounded-full 2xl:px-12 2xl:py-2.5 px-8 py-2 font-Poppins font-sm border border-white 2xl:text-lg text-xs w-full transition hover:bg-white hover:text-black "
            >
              Visit Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
