import React, { useRef } from "react";
import NavComponent from "../components/NavComponent";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function MainSection() {
  const container = useRef();

  useGSAP(
    () => {

      function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({
            repeat: config.repeat,
            paused: config.paused,
            defaults: { ease: "none" },
            onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
          }),
          length = items.length,
          startX = items[0].offsetLeft,
          times = [],
          widths = [],
          xPercents = [],
          curIndex = 0,
          pixelsPerSecond = (config.speed || 1) * 100,
          snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
          totalWidth,
          curX,
          distanceToStart,
          distanceToLoop,
          item,
          i;
        gsap.set(items, {
          // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
          xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            xPercents[i] = snap(
              (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
                gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
          },
        });
        gsap.set(items, { x: 0 });
        totalWidth =
          items[length - 1].offsetLeft +
          (xPercents[length - 1] / 100) * widths[length - 1] -
          startX +
          items[length - 1].offsetWidth *
            gsap.getProperty(items[length - 1], "scaleX") +
          (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = (xPercents[i] / 100) * widths[i];
          distanceToStart = item.offsetLeft + curX - startX;
          distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(
            item,
            {
              xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
              duration: distanceToLoop / pixelsPerSecond,
            },
            0
          )
            .fromTo(
              item,
              {
                xPercent: snap(
                  ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                ),
              },
              {
                xPercent: xPercents[i],
                duration:
                  (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false,
              },
              distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
          vars = vars || {};
          Math.abs(index - curIndex) > length / 2 &&
            (index += index > curIndex ? -length : length); // always go in the shortest direction
          let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
          if (time > tl.time() !== index > curIndex) {
            // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
            time += tl.duration() * (index > curIndex ? 1 : -1);
          }
          curIndex = newIndex;
          vars.overwrite = true;
          return tl.tweenTo(time, vars);
        }
        tl.next = (vars) => toIndex(curIndex + 1, vars);
        tl.previous = (vars) => toIndex(curIndex - 1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true); // pre-render for performance
        if (config.reversed) {
          tl.vars.onReverseComplete();
          tl.reverse();
        }
        return tl;
      }
      const items = gsap.utils.toArray(container.current.children); // Get all child elements
      horizontalLoop(items, { repeat:-1 ,duration: 20 }); // Adjust duration as needed
    },
    { scope: container }
  );
  return (
    <div className="lg:h-screen  flex flex-col w-full lg:gap-0 gap-64 mb-24">
      <NavComponent />
      <section
        ref={container}
        className="grow flex flex-col justify-center items-center"
      >
        <h3 className="font-Poppins text-center cursor-default">
          {["S", "o", "k", "i", "n", "a", " ", "H", "o"].map((char, index) => (
            <span
              key={index}
              className="inline-block text-6xl font-bold transform transition-transform duration-200 ease-in-out hover:-translate-y-4  hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#0093E9] to-[#80D0C7] to-60%"
            >
              {char}
            </span>
          ))}
        </h3>
        <p className="font-Poppins text-xl relative sm:left-20 cursor-default ">
          A{" "}
          <span className="font-Dancing text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-[#85FFBD] to-[#FFFB7D] ">
            Junior
          </span>{" "}
          Web{" "}
          <span className="font-Playfair text-transparent bg-clip-text bg-gradient-to-r from-[#4158D0] via-[#C850C0] to-[#FFCC70]">
            Developer
          </span>
        </p>
      </section>
      <div
        ref={container}
        className="text-center w-full 2xl:text-9xl 2xl:gap-80 lg:text-6xl text-4xl font-bold text-gray-600 text-nowrap overflow-hidden py-5 flex flex-row gap-20"
      >
        <p className="2xl:pl-80 lg:pl-36 pl-20">Front-end developer. </p>
        <p>Back-end developer. </p>
        <p>UI/UX Design.</p>
        <p className="">Animation.</p>
      </div>
    </div>
  );
}
