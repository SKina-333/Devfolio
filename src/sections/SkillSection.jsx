import { useCursorHoverContext } from "../sections/contexts/cursorHoverContext.jsx";
import Typewriter from "../components/TypewriterEffect.jsx";
export default function SkillSection() {
  const { setIsHovering, setImageText } = useCursorHoverContext();

  return (
    <div className=" lg:h-screen h-[920px] lg:p-16 p-5">
      <h2 className="2xl:text-7xl lg:text-6xl text-4xl font-Poppins font-bold 2xl:mx-96">
        Skills
      </h2>
      <div className="flex lg:flex-row lg:gap-0 flex-col gap-44 2xl:mt-32 lg:mt-10 mt-20 justify-evenly items-center">
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col  gap-4 lg:relative lg:top-20 ">
            <div className="flex flex-row gap-4 items-end">
              <div
                className="2xl:h-[90px]  2xl:w-[90px] lg:h-[70px] lg:w-[70px] h-[70px] w-[70px] bg-Tailwind bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("Tailwind CSS");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
              <div
                className="2xl:h-[170px]  2xl:w-[170px] lg:h-[150px] lg:w-[150px] h-[70px] w-[70px] bg-HTML bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("HTML");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
            </div>
            <div className="flex flex-row gap-4 items-start justify-end lg:relative lg:right-4">
              <div
                className="2xl:h-[70px]  2xl:w-[70px] lg:h-[50px] lg:w-[50px] h-[70px] w-[70px] bg-Figma bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("Figma");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
              <div
                className="2xl:h-[155px]  2xl:w-[155px] lg:h-[135px] lg:w-[135px] h-[70px] w-[70px] bg-React bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("React");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
            </div>
            <div className="flex flex-row gap-4 items-end justify-end lg:relative lg:right-2">
              <div
                className="2xl:h-[80px]  2xl:w-[80px] lg:h-[60px] lg:w-[60px] h-[70px] w-[70px] bg-Extra bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("Extra");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col  gap-4">
            <div className="flex flex-row gap-4 items-end">
              <div
                className="2xl:h-[70px]  2xl:w-[70px] lg:h-[50px] lg:w-[50px] h-[70px] w-[70px] bg-Git bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("Git");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
              <div
                className="2xl:h-[90px]  2xl:w-[90px] lg:h-[70px] lg:w-[70px] h-[70px] w-[70px] bg-SQL bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("SQL");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
            </div>
            <div className="flex flex-row gap-4 items-end">
              <div
                className="2xl:h-[150px]  2xl:w-[150px] lg:h-[130px] lg:w-[130px] h-[70px] w-[70px] bg-JS bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("JavaScript");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
              <div
                className="2xl:h-[80px]  2xl:w-[80px] lg:h-[60px] lg:w-[60px]  h-[70px] w-[70px] bg-PHP bg-cover rounded-xl lg:relative lg:top-10"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("PHP");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
            </div>
            <div className="flex flex-row gap-4 items-end justify-start lg:relative lg:right-4">
              <div
                className="2xl:h-[170px]  2xl:w-[170px] lg:h-[150px] lg:w-[150px] h-[70px] w-[70px] bg-Css bg-cover rounded-xl"
                onMouseEnter={() => {
                  setIsHovering(true);
                  setImageText("CSS");
                }}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setImageText("");
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="2xl:h-[650px]  2xl:w-[600px] lg:w-[415px] lg:h-[450px] h-[300px] w-[277px] bg-IDM bg-cover flex justify-center items-end">
          <div className="w-full h-[84%] p-5">
            <div className="flex" data-cursor="text">
              <Typewriter text="Hello! Welcome to my portfolio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
