import React from "react";

export default function SkillSection() {
  return (
    <div className=" h-screen p-16">
      <h2 className="text-7xl font-Poppins font-bold">Skills</h2>
      <div className="flex flex-row mt-36 justify-between">
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col  gap-4 relative top-20 ">
            
            <div className="flex flex-row gap-4 items-end">
              <div className="h-[90px] w-[90px] bg-Tailwind bg-cover rounded-xl"></div>
              <div className="h-[170px] w-[170px] bg-HTML bg-cover rounded-xl"></div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-end relative right-4">
              <div className="h-[70px] w-[70px] bg-Figma bg-cover rounded-xl"></div>
              <div className="h-[155px] w-[155px] bg-React bg-cover rounded-xl"></div>
            </div>
            <div className="flex flex-row gap-4 items-end justify-end relative right-2">
              <div className="h-[80px] w-[80px] bg-Extra bg-cover rounded-xl"></div>
            </div>
          </div>
          
          
          <div className="flex flex-col  gap-4">
            
            <div className="flex flex-row gap-4 items-end">
              <div className="h-[70px] w-[70px] bg-Git bg-cover rounded-xl"></div>
              <div className="h-[90px] w-[90px] bg-SQL bg-cover rounded-xl"></div>
            </div>
            <div className="flex flex-row gap-4 items-end">
              <div className="h-[150px] w-[150px] bg-JS bg-cover rounded-xl"></div>
              <div className="h-[80px] w-[80px] bg-PHP bg-cover rounded-xl relative top-10"></div>
            </div>
            <div className="flex flex-row gap-4 items-end justify-start relative right-4">
              <div className="h-[170px] w-[170px] bg-Css bg-cover rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="w-[600px] h-[650px]  bg-IDM bg-cover">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
