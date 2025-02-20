import React from "react";

export default function SkillSection() {
  return (
    <div className=" h-screen p-16 border border-white ">
      <h2 className="2xl:text-7xl text-6xl font-Poppins font-bold 2xl:mx-96">Skills</h2>
      <div className="flex flex-row 2xl:mt-32 mt-10 justify-evenly">
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col  gap-4 relative top-20 ">
            
            <div className="flex flex-row gap-4 items-end">
              <div className="2xl:h-[90px]  2xl:w-[90px] h-[70px] w-[70px] bg-Tailwind bg-cover rounded-xl"></div>
              <div className="2xl:h-[170px]  2xl:w-[170px] h-[150px] w-[150px] bg-HTML bg-cover rounded-xl"></div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-end relative right-4">
              <div className="2xl:h-[70px]  2xl:w-[70px] h-[50px] w-[50px] bg-Figma bg-cover rounded-xl"></div>
              <div className="2xl:h-[155px]  2xl:w-[155px] h-[135px] w-[135px] bg-React bg-cover rounded-xl"></div>
            </div>
            <div className="flex flex-row gap-4 items-end justify-end relative right-2">
              <div className="2xl:h-[80px]  2xl:w-[80px] h-[60px] w-[60px] bg-Extra bg-cover rounded-xl"></div>
            </div>
          </div>
          
          
          <div className="flex flex-col  gap-4">
            
            <div className="flex flex-row gap-4 items-end">
              <div className="2xl:h-[70px]  2xl:w-[70px] h-[50px] w-[50px] bg-Git bg-cover rounded-xl"></div>
              <div className="2xl:h-[90px]  2xl:w-[90px] h-[70px] w-[70px] bg-SQL bg-cover rounded-xl"></div>
            </div>
            <div className="flex flex-row gap-4 items-end">
              <div className="2xl:h-[150px]  2xl:w-[150px] h-[130px] w-[130px] bg-JS bg-cover rounded-xl"></div>
              <div className="2xl:h-[80px]  2xl:w-[80px] h-[60px] w-[60px] bg-PHP bg-cover rounded-xl relative top-10"></div>
            </div>
            <div className="flex flex-row gap-4 items-end justify-start relative right-4">
              <div className="2xl:h-[170px]  2xl:w-[170px] h-[150px] w-[150px] bg-Css bg-cover rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="2xl:h-[650px]  2xl:w-[600px] w-[415px] h-[450px] bg-IDM bg-cover">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
