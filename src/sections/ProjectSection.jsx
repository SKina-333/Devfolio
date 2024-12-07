import React, { useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import chat from "../assets/chat.png";
import gym from "../assets/gym.png";
import sketch from "../assets/sketch.png";
import stripe from "../assets/stripeAPI.png";
import tictactoe from "../assets/tictactoe.png";

ScrollTrigger.config({ ignoreMobileResize: true });

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectSection() {
  const container = useRef();
  useGSAP(
    () => {
      
      
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="2xl:h-screen lg:w-1/2 w-full flex flex-col justify-center gap-5 p-5 "
    >
      <div className="flex flex-col gap-5">
        <p className="lg:text-6xl text-3xl font-bold font-Poppins">
          My Project
        </p>
        <p className="lg:text-2xl text-lg font-Poppins">
          Projects that I have worked on
        </p>
      </div>
      <div className="w-ful flex lg:flex-row flex-col flex-wrap gap-10">
        <div
          id="box"
          className="flex flex-row rounded-lg bg-white text-black p-5 font-Poppins gap-5 justify-between"
        >
          <div className="flex flex-col justify-between gap-5 2xl:w-80 lg:w-56 pr-5">
            <div>
              <p className="font-bold 2xl:text-3xl text-sm">Chat Application</p>
              <div>
                <p>tags</p>
              </div>
            </div>

            <div>
              <p>Links</p>
            </div>
          </div>
          <div className="w-24 h-full">
            <img
              src={chat}
              alt="Chat application"
              className="bject-cover shadow-xl border border-gray-600 rounded-lg"
            />
          </div>
        </div>
        <div
          id="box"
          className="flex flex-row rounded-lg bg-white text-black p-5 font-Poppins gap-5 justify-between"
        >
          <div className="flex flex-col justify-between gap-5 2xl:w-80 lg:w-56 pr-5">
            <div>
              <p className="font-bold 2xl:text-3xl text-sm">Gym Tracker</p>
              <div>
                <p>tags</p>
              </div>
            </div>

            <div>
              <p>Links</p>
            </div>
          </div>
          <div className="w-24 h-full">
            <img
              src={gym}
              alt="Chat application"
              className="object-cover  shadow-xl border border-gray-600 rounded-lg"
            />
          </div>
        </div>
        <div
          id="box"
          className="flex flex-row rounded-lg bg-white text-black p-5 font-Poppins gap-5 justify-between"
        >
          <div className="flex flex-col justify-between gap-5 2xl:w-80 lg:w-56 pr-5">
            <div>
              <p className="font-bold 2xl:text-3xl text-sm">Stripe API integration</p>
              <div>
                <p>tags</p>
              </div>
            </div>

            <div>
              <p>Links</p>
            </div>
          </div>
          <div className="w-24 h-full">
            <img
              src={stripe}
              alt="Chat application"
              className="object-cover  shadow-xl border border-gray-600 rounded-lg"
            />
          </div>
        </div>
        <div
          id="box"
          className="flex flex-row rounded-lg bg-white text-black p-5 font-Poppins gap-5 justify-between"
        >
          <div className="flex flex-col justify-between gap-5 2xl:w-80 lg:w-56 pr-5">
            <div>
              <p className="font-bold 2xl:text-3xl text-sm">Sketch Book</p>
              <div>
                <p>tags</p>
              </div>
            </div>

            <div>
              <p>Links</p>
            </div>
          </div>
          <div className="w-24 h-full">
            <img
              src={sketch}
              alt="Sketch Book"
              className="bject-cover shadow-xl border border-gray-600 rounded-lg"
            />
          </div>
        </div>
        <div
          id="box"
          className="flex flex-row rounded-lg bg-white text-black p-5 font-Poppins gap-5 justify-between"
        >
          <div className="flex flex-col justify-between gap-5 2xl:w-80 lg:w-56 pr-5">
            <div>
              <p className="font-bold 2xl:text-3xl text-sm">Tic Tac Toe</p>
              <div>
                <p>tags</p>
              </div>
            </div>

            <div>
              <p>Links</p>
            </div>
          </div>
          <div className="w-24 h-full">
            <img
              src={tictactoe}
              alt="Tic Tac Toe"
              className="bject-cover shadow-xl border border-gray-600 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
