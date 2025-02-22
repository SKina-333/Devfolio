import React from "react";

import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <div className="h-screen text-nowrap w-full flex flex-col ">
      <div className="flex flex-col items-center justify-center h-full  relative">
        <div className="absolute rotate-90 right-0 pt-10 flex items-center ">
          <div className="w-[64px] h-[1.5px] bg-white"></div>
          <span className="ml-2 text-white font-Poppins text-xl">scroll</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            scale: { type: "spring", visualDuration: 2 },
          }}
          className="font-Poppins text-8xl font-bold"
        >
          SOKINA HO
        </motion.h1>
        <motion.div className="flex flex-row gap-2 text-2xl relative left-[165px]">
          <p className="font-Poltawski bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text font-semibold">
            Junior
          </p>
          <p className="font-Anonymous">
            Developer<span>.</span>
          </p>
        </motion.div>
      </div>

      <div className="flex py-10 mb-28 overflow-x-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          className=" text-5xl text-[#AAB4DD] font-[700] flex flex-shrink-0 gap-44"
        >
          <p>ATION.</p>
          <p>UX/UI DESIGN.</p>
          <p>BACKEND.</p>
          <p>ANIMATION.</p>
          <p>UX/UI DESIGN.</p>
          <p>BACKEND.</p>
          <p>ANIMATION.</p>
          <p>UX/UI DESIGN.</p>
          <p>BACKEND.</p>
          <p>ANIM</p>
          
          
        </motion.div>
        <motion.div
         initial={{ x: 0 }}
         animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          className=" text-5xl text-[#AAB4DD] font-[700] flex flex-shrink-0 gap-44"
        >
          <p>ATION.</p>
          <p>UX/UI DESIGN.</p>
          <p>BACKEND.</p>
          <p>ANIMATION.</p>
          <p>UX/UI DESIGN.</p>
          <p>BACKEND.</p>
          <p>ANIMATION.</p>
          <p>UX/UI DESIGN.</p>
          <p>BACKEND.</p>
          <p>ANIM</p>
          
        </motion.div>
        
      </div>
    </div>
  );
}
