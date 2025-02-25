import React from "react";



export default function NavComponent() {
  return (
    
      <div className="lg:px-16 px-5 py-4 flex flex-row justify-between bg-black ">
        <div className=" text-2xl lg:text-3xl font-[700]">
          SK<span className="text-blue-700">.</span>
        </div>
        <div className="hidden lg:flex flex-row gap-12 text-xl font-Poppins font-semibold">
          <button>Portfolio</button>
          <button>Skills</button>
          <button>Projects</button>
          <button>Contact</button>
        </div>
        <div className="lg:hidden">

        </div>
      </div>
    
  );
}
