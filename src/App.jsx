// eslint-disable-next-line no-unused-vars
import React from "react";
import StickyNavbar from "./components/StickyNavbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <StickyNavbar />
        <div id="hero"><Hero /></div>
        <div id="exp"><Exp /></div>
        <div id="tech"><Tech /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
};

export default App;
