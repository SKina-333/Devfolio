import React, { useRef } from "react";
import { motion } from "framer-motion";

export default function AnimateSectionOne() {
  return (
    <div className="h-screen flex flex-col lg:gap-20 gap-10 font-bold 2xl:text-8xl lg:text-6xl text-xl p-28 items-center justify-center ">
      <div id="textBoxOne" className="text-white  flex flex-col items-start ">
        <div className="flex flex-col justify-center ">
          <motion.div className="relative w-full ">
            <motion.p
              initial={{ rotateX: 0, opacity: 1 }}
              whileInView={{ rotateX: 90, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "linear" }}
              className="font-Poppins   text-nowrap origin-top"
            >
              I thrive on bringing ideas to life
            </motion.p>
            <motion.p
              initial={{ rotateX: -100 }}
              whileInView={{ rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
              className="font-Poppins absolute top-0  text-nowrap origin-bottom"
            >
              I thrive on bringing ideas to life
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "linear" }}
            className="relative w-full "
          >
            <motion.p
              initial={{ rotateX: 0, opacity: 1 }}
              whileInView={{ rotateX: 90, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
              className="font-Poppins   text-nowrap origin-top"
            >
              through code and design
            </motion.p>
            <motion.p
              initial={{ rotateX: -100 }}
              whileInView={{ rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "linear", delay: 0.3 }}
              className="font-Poppins absolute top-0  text-nowrap origin-bottom"
            >
              through code and design
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div
        id="textBoxTwo"
        className="text-white flex flex-col items-start justify-center "
      >
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "linear", delay: 1 }}
          viewport={{ once: true }}
          className="font-Playfair text-nowrap"
        >
          Passionate about turning complex
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0, repeatCount:0 }}
          transition={{ duration: 0.7, ease: "linear", delay: 1 }}
          viewport={{ once: true }}
          className="font-Playfair text-nowrap"
        >
          problems into simple, beautiful
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "linear", delay: 1 }}
          viewport={{ once: true }}
          className="font-Playfair text-nowrap"
        >
          solutions.
        </motion.p>
      </div>
    </div>
  );
}
