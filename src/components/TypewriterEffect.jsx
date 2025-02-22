"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function Typewriter({ text }) {
    const children = useMotionValue("");

    useEffect(() => {
        const animation = animate(0, text.length, {
            duration: 4,
            ease: "linear",
            onUpdate: (latest) => {
                children.set(text.slice(0, Math.ceil(latest)));
            },
        });

        return () => animation.stop();
    }, [text, children]);

    return (
        <h2 className="relative">
            <motion.span className="font-poppins font-semibold text-2xl text-wrap">{children}</motion.span>
            <motion.div
                className="absolute right-[-10px] top-0 bottom-0 w-[2px] bg-[#001fff] opacity-0 "
                whileInView={{
                    opacity: [1, 1, 0, 0],
                    transition: {
                        duration: 1,
                        repeat: Infinity,
                        times: [0, 0.5, 0.5, 1],
                    },
                }}
                viewport={{ once: true }}
            />
        </h2>
    );
}
