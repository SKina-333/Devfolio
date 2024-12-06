import React from "react";

export default function SkillSection() {
  return (
    <div className="h-screen flex lg:flex-row flex-col lg:w-1/2 items-center justify-center border border-white">
      <div className="border border-green-500">
        <div className="flex flex-col gap-8">
          <h3 className="text-5xl font-Poppins font-bold">My Skills</h3>
          <p className="font-Poppins text-1xl font-semibold">
            Bringing innovation to life through clean code, creative design, and
            seamless functionality.
          </p>
          <div className="flex flex-col gap-8 font-Poppins font-semibold">
            {/* Languages and Tools Section */}
            <div className="flex flex-col gap-5">
              <p>Languages and Tools</p>
              <div className="flex flex-rows flex-wrap w-10/12 gap-5">
                <div className="group bg-html  bg-center bg-no-repeat aspect-square w-16 bg-[length:50px_57px]"></div>
                <div className="group bg-css bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-javascript bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-vite bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-node bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-php bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-postman bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-figma bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
              </div>
            </div>

            {/* Frameworks and Libraries Section */}
            <div className="flex flex-col gap-5">
              <p>Frameworks and Libraries</p>
              <div className="flex flex-rows flex-wrap w-10/12 gap-5">
                <div className="group bg-react bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-express bg-white bg-[length:70%_60%] bg-center bg-no-repeat aspect-square w-16 rounded-full"></div>
                <div className="group bg-tailwind bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-cakePHP bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                <div className="group bg-gsap bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
              </div>
            </div>

            {/* Databases Section */}
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5">
                <p>Databases</p>
                <div className="flex flex-rows flex-wrap gap-5">
                  <div className="group bg-mysql bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                  <div className="group bg-mongodb bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                  <div className="group bg-postgres bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                </div>
              </div>

              {/* Others Section */}
              <div className="flex flex-col gap-5">
                <p>Others</p>
                <div className="flex flex-rows flex-wrap gap-5">
                  <div className="group bg-git bg-contain bg-center bg-no-repeat aspect-square w-16"></div>
                  <div className="group bg-spotify bg-center bg-no-repeat aspect-square w-16 bg-[length:160%_80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center shrink border border-green-500">
        <div>
          Animation
        </div>
      </div>
    </div>
  );
}
