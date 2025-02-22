import { useCursorHoverContext } from "../sections/contexts/cursorHoverContext.jsx";
import Typewriter from "../components/TypewriterEffect.jsx";
export default function SkillSection() {
  const { setIsHovering, setImageText } = useCursorHoverContext();

  return (
    <div className=" h-screen p-16 border border-white ">
      <h2 className="2xl:text-7xl text-6xl font-Poppins font-bold 2xl:mx-96">
        Skills
      </h2>
      <div className="flex flex-row 2xl:mt-32 mt-10 justify-evenly">
        <div className="flex flex-row gap-4 ">
          <div className="flex flex-col  gap-4 relative top-20 ">
            <div className="flex flex-row gap-4 items-end">
              <div
                className="2xl:h-[90px]  2xl:w-[90px] h-[70px] w-[70px] bg-Tailwind bg-cover rounded-xl"
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
                className="2xl:h-[170px]  2xl:w-[170px] h-[150px] w-[150px] bg-HTML bg-cover rounded-xl"
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
            <div className="flex flex-row gap-4 items-start justify-end relative right-4">
              <div
                className="2xl:h-[70px]  2xl:w-[70px] h-[50px] w-[50px] bg-Figma bg-cover rounded-xl"
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
                className="2xl:h-[155px]  2xl:w-[155px] h-[135px] w-[135px] bg-React bg-cover rounded-xl"
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
            <div className="flex flex-row gap-4 items-end justify-end relative right-2">
              <div
                className="2xl:h-[80px]  2xl:w-[80px] h-[60px] w-[60px] bg-Extra bg-cover rounded-xl"
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
                className="2xl:h-[70px]  2xl:w-[70px] h-[50px] w-[50px] bg-Git bg-cover rounded-xl"
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
                className="2xl:h-[90px]  2xl:w-[90px] h-[70px] w-[70px] bg-SQL bg-cover rounded-xl"
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
                className="2xl:h-[150px]  2xl:w-[150px] h-[130px] w-[130px] bg-JS bg-cover rounded-xl"
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
                className="2xl:h-[80px]  2xl:w-[80px] h-[60px] w-[60px] bg-PHP bg-cover rounded-xl relative top-10"
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
            <div className="flex flex-row gap-4 items-end justify-start relative right-4">
              <div
                className="2xl:h-[170px]  2xl:w-[170px] h-[150px] w-[150px] bg-Css bg-cover rounded-xl"
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
        <div className="2xl:h-[650px]  2xl:w-[600px] w-[415px] h-[450px] bg-IDM bg-cover flex justify-center items-end">
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
