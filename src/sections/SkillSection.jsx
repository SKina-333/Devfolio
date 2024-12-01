import React from "react";

export default function SkillSection() {
  return (
    <div className="h-screen flex flex-row w-1/2 items-center">
      <div>
        <div className="flex flex-col gap-8">
          <h3 className="text-5xl font-Poppins font-bold">My Skills</h3>
          <p className="font-Poppins text-1xl font-semibold">
            Bringing innovation to life through clean code, creative design, and
            seamless functionality.
          </p>
          <div className="flex flex-col gap-8 font-Poppins font-semibold">
            <div className="flex flex-col gap-5">
              <p>Languages and Tools</p>
              <div className="flex flex-rows flex-wrap w-10/12 gap-5">
                {[
                  { name: "html", extra: "bg-[length:50px_57px]" },
                  { name: "css" },
                  { name: "javascript" },
                  { name: "vite" },
                  { name: "node" },
                  { name: "php" },
                  { name: "postman" },
                  { name: "figma" },
                ].map(({ name, extra = "" }, index) => (
                  <div
                    key={index}
                    className={`group bg-${name} bg-contain bg-center bg-no-repeat aspect-square w-16 ${extra}`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <p>Frameworks and Libraries</p>
              <div className="flex flex-rows flex-wrap w-10/12 gap-5">
                {[
                  { name: "react" },
                  {
                    name: "express",
                    extra: "bg-white bg-[length:70%_60%]  rounded-full",
                  },
                  { name: "tailwind" },
                  { name: "cakePHP" },
                  { name: "gsap" },
                ].map(({ name, extra = "" }, index) => (
                  <div
                    key={index}
                    className={`group bg-${name} bg-contain bg-center bg-no-repeat aspect-square w-16 ${extra}`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <div className="flex flex-col gap-5">
                <p>Databases</p>
                <div className="flex flex-rows flex-wrap gap-5">
                  {["mysql", "mongodb", "postgres"].map((db, index) => (
                    <div
                      key={index}
                      className={`group bg-${db} bg-contain bg-center bg-no-repeat aspect-square w-16`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p>Others</p>
                <div className="flex flex-rows flex-wrap gap-5">
                  {[
                    { name: "git" },
                    { name: "spotify", extra: "bg-[length:160%_80%]" },
                  ].map(({ name, extra = "" }, index) => (
                    <div
                      key={index}
                      className={`group bg-${name} bg-contain bg-center bg-no-repeat aspect-square w-16 ${extra}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center shrink">
        <div>
          Animation
          
        </div>
      </div>
    </div>
  );
}
