import React from "react";

import mySQL from "../assets/mysql.png";
import mongoDB from "../assets/mongodb.png";
import postgres from "../assets/postgres.png";
import github from "../assets/github.png";
import spotify from "../assets/spotify.png";
import react from "../assets/react.png";
import express from "../assets/express.png";
import tailwind from "../assets/tailwind.png";
import cakephp from "../assets/cakephp.png";
import gsap from "../assets/gsap.jpg";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import vite from "../assets/vite.png";
import node from "../assets/nodejs.png";
import php from "../assets/php.png";
import postman from "../assets/postman.png";
import figma from "../assets/figma.png";

export default function SkillSection() {
  return (
    <div className="lg:h-screen flex lg:flex-row flex-col lg:w-1/2 items-center justify-stretch p-5  gap-5 lg:mt-16 mt-0 border border-white">
      <div className="">
        <div className="flex flex-col gap-8">
          <h3 className="sm:text-6xl text-3xl font-Poppins font-bold">My Skills</h3>
          <p className="font-Poppins sm:text-lg text-sm font-semibold text-wrap">
            Bringing innovation to life through clean code, creative design, and
            seamless functionality.
          </p>
          <div className="flex flex-col gap-8 font-Poppins font-semibold">
            {/* Languages and Tools Section */}
            <div className="flex flex-col gap-5">
              <p>Languages and Tools</p>
              <div className="flex flex-rows flex-wrap w-10/12 gap-5">
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={html}
                    alt="HTML Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={css}
                    alt="CSS Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={javascript}
                    alt="JavaScript Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={vite}
                    alt="Vite Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={node}
                    alt="Node.js Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={php}
                    alt="PHP Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={postman}
                    alt="Postman Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={figma}
                    alt="Figma Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Frameworks and Libraries Section */}
            <div className="flex flex-col gap-5">
              <p>Frameworks and Libraries</p>
              <div className="flex flex-rows flex-wrap w-10/12 gap-5">
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={react}
                    alt="React Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center rounded-full bg-white">
                  <img
                    src={express}
                    alt="Express Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={tailwind}
                    alt="Tailwind Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={cakephp}
                    alt="CakePHP Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                  <img
                    src={gsap}
                    alt="GSAP Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Databases Section */}
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5">
                <p>Databases</p>
                <div className="flex flex-rows flex-wrap gap-5">
                  <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                    <img
                      src={mySQL}
                      alt="MySQL Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                    <img
                      src={mongoDB}
                      alt="MongoDB Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                    <img
                      src={postgres}
                      alt="Postgres Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Others Section */}
              <div className="flex flex-col gap-5">
                <p>Others</p>
                <div className="flex flex-rows flex-wrap gap-5">
                  <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                    <img
                      src={github}
                      alt="Git Logo"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="group aspect-square 2xl:w-16 lg:w-12 w-16 flex items-center justify-center">
                    <img
                      src={spotify}
                      alt="Spotify Logo"
                      className="  object-contain aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>Animation</div>
      </div>
    </div>
  );
}
