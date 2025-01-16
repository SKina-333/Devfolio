import React from "react";
import { motion, useSpring, useScroll } from "motion/react";
export default function ScrollLinked() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
      }}
      className=" left-0 right-0 h-3 bg-gradient-to-r from-blue-700 to-blue-500"
    />
  );
}
