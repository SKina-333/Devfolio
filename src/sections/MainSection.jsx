import React from "react";

import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <div className="lg:h-screen h-[920px] text-nowrap w-full flex flex-col ">
      <div className="flex flex-col items-center justify-center h-full  relative">
        <div className="absolute lg:rotate-90 lg:right-0 lg:top-0 bottom-44 pt-10 lg:flex items-center hidden">
          <div className="w-[64px] h-[1.5px] bg-white n"></div>
          <span className="ml-2 text-white font-bold font-Poppins text-xl">Scroll down</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            scale: { type: "spring", visualDuration: 2 },
          }}
          className="font-Poppins lg:text-8xl text-5xl font-bold"
        >
          SOKINA HO
        </motion.h1>
        <motion.div className="flex flex-row gap-2 lg:text-2xl text-lg relative lg:left-[165px] left-12">
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
          className=" lg:text-5xl text-2xl text-[#AAB4DD] font-[700] flex flex-shrink-0 gap-44"
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
          className=" lg:text-5xl text-2xl text-[#AAB4DD] font-[700] flex flex-shrink-0 gap-44"
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
