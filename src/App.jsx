import { useState } from "react";

import "./App.css";

import MainSection from "./sections/MainSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import SkillSection from "./sections/SkillSection";
import AnimateSectionOne from "./sections/AnimateSectionOne";
import AnimateSectionTwo from "./sections/AnimateSectionTwo";
import ProjectSection from "./sections/ProjectSection"

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="flex flex-col items-center">
        <MainSection />
        <AnimateSectionOne />
        <SkillSection />
        <AnimateSectionTwo />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </div>
    </div>
      
  );
}

export default App;
