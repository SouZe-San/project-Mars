// import React from 'react'

// Component import
import ArrowIcon from "../../components/Arrow/ArrowIcon";
import Exploration from "../../components/Exploration/Exploration";
import Gallery from "../../components/Gallery/Gallery";
import HeroSection from "../../components/hero-section/HeroSection";
import Navbar from "../../components/navbar/Navbar";
import TextSlider from "../../components/textSlideing/TextSlider";

// style import
import "./home_style.scss";

const Home = () => {
  return (
    <div className="bgBlur ">
      <section className="hero-section relative">
        {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    NavSection    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
        <header>
          <Navbar />
        </header>
        {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    HeroSection    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
        <HeroSection />
      </section>
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    ExplorationSection    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <section className="exploration-section">
        <Exploration />
      </section>
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    Gallery Or Marsian Life    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/}
      <section className=" px-24 mt-16 w-full h-screen relative flex flex-col justify-center">
        <div className="absolute flex justify-between w-full left-0">
          {/*//! if Clicked the transform translate: 25%; */}

          <div className="rotate-180 cursor-pointer">
            <ArrowIcon />
          </div>

          {/*//!if Clicked the transform translate: -25%; */}
          <div className=" cursor-pointer">
            <ArrowIcon />
          </div>
        </div>
        <Gallery />
      </section>

      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    Text Sliding - MARS PLANET     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      <section className="mt-16">
        <TextSlider text="Mars Planet" />
      </section>

      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    PROCESS FOR PROCESSING     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    TICKET CENTER     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    FACT SECTION    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    Text Sliding - SPACE TRAVEL     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    SOME NEWS    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    CONTACT ME    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
    </div>
  );
};

export default Home;
