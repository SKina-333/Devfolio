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

import * as motion from "motion/react-client";
import { Cursor } from "motion-cursor";

function App() {
  const [cursorColor, setCursorColor] = useState("rgba(255, 255, 255, 0.5)");
  
  return (
    <div className="flex flex-col relative">
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
      />
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
