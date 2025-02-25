import { useState } from "react";

import "./App.css";
import NavComponent from "./components/NavComponent";
import ScrollLinked from "./components/ScrollLinked";
import MainSection from "./sections/MainSection";
import ContactSection from "./sections/ContactSection";
import SkillSection from "./sections/SkillSection";
import AnimateSectionOne from "./sections/AnimateSectionOne";
import Experience from "./sections/Experience";
import ProjectSection from "./sections/ProjectSection";

import { Cursor } from "motion-cursor";
import { useCursorHoverContext } from "./sections/contexts/cursorHoverContext.jsx";

function App() {
  const [cursorColor, setCursorColor] = useState("rgba(255, 255, 255, 0.5)");
  const { isHovering, imageText } = useCursorHoverContext();
  return (
    <div className="flex flex-col relative overflow-clip">
      <Cursor
        className=""
        style={{
          backgroundColor: cursorColor,
        }}
        variants={{
          text: {
            backgroundColor: "#001fff",
          },
        }}
      >
        {isHovering ? <p className="font-sm font-poppins font-bold px-5 py-3 text-white bg-[#001fff]">{imageText}</p> : null}
      </Cursor>
      <div className="sticky top-0 z-50">
        <NavComponent />
        <ScrollLinked />
      </div>

      <MainSection />
      <AnimateSectionOne />
      <SkillSection />
      <Experience />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;
