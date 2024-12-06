import React from "react";

import mySQL from "../assets/mysql.png"
import mongoDB from "../assets/mongodb.png"
import postgres from "../assets/postgres.png"

export default function SkillSection() {
  return (
    <div className="h-screen flex lg:flex-row flex-col lg:w-1/2 items-center justify-stretch p-5  gap-5 lg:mt-16 mt-0">
      <div className="">
        <div className="flex flex-col gap-8">
          <h3 className="text-6xl font-Poppins font-bold">My Skills</h3>
          <p className="font-Poppins text-lg font-semibold text-wrap">
            Bringing innovation to life through clean code, creative design, and
            seamless functionality.
          </p>
          <div className="flex flex-col gap-8 font-Poppins font-semibold">
            {/* Languages and Tools Section */}
            <div className="flex flex-col gap-5">
              <p>Languages and Tools</p>
              <div className="flex flex-rows flex-wrap w-10/12 gap-5">
                <div className="group bg-html  bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16 lg:bg-[length:38px_45px] bg-[length:50px_57px] 2xl:bg-[length:50px_57px]"></div>
                <div className="group bg-css bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-javascript bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-vite bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-node bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-php bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-postman bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-figma bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
              </div>
            </div>

            {/* Frameworks and Libraries Section */}
            <div className="flex flex-col gap-5">
              <p>Frameworks and Libraries</p>
              <div className="flex flex-rows flex-wrap w-10/12 gap-5">
                <div className="group bg-react bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-express bg-white bg-[length:70%_60%] bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16 rounded-full"></div>
                <div className="group bg-tailwind bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-cakePHP bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                <div className="group bg-gsap bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
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
                  <div className="group bg-git bg-contain bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16"></div>
                  <div className="group bg-spotify bg-center bg-no-repeat aspect-square 2xl:w-16 lg:w-12 w-16 bg-[length:160%_80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>
          Animation
        </div>
      </div>
    </div>
  );
}
