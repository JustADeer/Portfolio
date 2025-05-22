import useSound from "use-sound";
import clickSound from "./assets/powerUp.wav";
import { useState } from "react";

import About from "./about";
import Contact from "./contact";
import Portfolio from "./portfolio";
import Faq from "./faq";

function MainButtons() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [activeComponent, setActiveComponent] = useState<string | null>(null);
  const [play] = useSound(clickSound);

  const handleCloseAbout = () => {
    play();
    setShowAbout(!showAbout);
  };

  const handleCloseContact = () => {
    play();
    setShowContact(!showContact);
  };

  const handleClosePortfolio = () => {
    play();
    setShowPortfolio(!showPortfolio);
  };

  const handleCloseFaq = () => {
    play();
    setShowFaq(!showFaq);
  };

  const handleDragStart = (component: string) => {
    setActiveComponent(component);
    console.log("Dragging started for:", component);
  };

  const buttonBaseClasses = `
  m-5
  flex
  flex-col
  items-center
  text-center
  hover:scale-110
  transition-transform
  duration-250
  ease-in-out
  cursor-pointer
  `;

  const imageBaseClasses = `
  max-w-14
  max-h-14
  mb-1
  drop-shadow-xl
  `;

  return (
    <div className="flex justify-center items-center flex-wrap p-4">
      <button
        className={buttonBaseClasses}
        onMouseEnter={() => play()}
        onClick={handleCloseAbout}
      >
        <img
          src="src/assets/about.png"
          className={imageBaseClasses}
          draggable="false"
        ></img>
        About
      </button>

      <button
        className={buttonBaseClasses}
        onMouseEnter={() => play()}
        onClick={handleClosePortfolio}
      >
        <img
          src="src/assets/portfolio.png"
          className={imageBaseClasses}
          draggable="false"
        ></img>
        Portfolio
      </button>

      <button
        className={buttonBaseClasses}
        onMouseEnter={() => play()}
        onClick={handleCloseFaq}
      >
        <img
          src="src/assets/faq.png"
          className={imageBaseClasses}
          draggable="false"
        ></img>
        FAQ
      </button>

      <button
        className={buttonBaseClasses}
        onMouseEnter={() => play()}
        onClick={handleCloseContact}
      >
        <img
          src="src/assets/email.png"
          className={imageBaseClasses}
          draggable="false"
        ></img>
        Contact
      </button>

      <div
        onClick={() => handleDragStart("about")}
        onFocus={() => handleDragStart("about")}
        style={{ zIndex: activeComponent === "about" ? 2 : 1 }}
      >
        {showAbout && <About onClose={handleCloseAbout}></About>}
      </div>

      <div
        onClick={() => handleDragStart("contact")}
        onFocus={() => handleDragStart("contact")}
        style={{ zIndex: activeComponent === "contact" ? 2 : 1 }}
      >
        {showContact && <Contact onClose={handleCloseContact}></Contact>}
      </div>

      <div
        onClick={() => handleDragStart("portfolio")}
        onFocus={() => handleDragStart("portfolio")}
        style={{ zIndex: activeComponent === "portfolio" ? 2 : 1 }}
      >
        {showPortfolio && (
          <Portfolio onClose={handleClosePortfolio}></Portfolio>
        )}
      </div>

      <div
        onClick={() => handleDragStart("faq")}
        onFocus={() => handleDragStart("faq")}
        style={{ zIndex: activeComponent === "faq" ? 2 : 1 }}
      >
        {showFaq && <Faq onClose={handleCloseFaq}></Faq>}
      </div>
    </div>
  );
}

export default MainButtons;
