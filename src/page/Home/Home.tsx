// import React from 'react'

// Component import
import Exploration from "../../components/Exploration/Exploration";
import Gallery from "../../components/Gallery/Gallery";
import HeroSection from "../../components/hero-section/HeroSection";
import Navbar from "../../components/navbar/Navbar";

// style import
import "./home_style.scss";

const Home = () => {
  return (
    <div className="bgBlur ">
      <section className="hero-section relative">
        {/* NavSection */}
        <header>
          <Navbar />
        </header>
        {/* HeroSection */}
        <HeroSection />
      </section>
      {/* ExplorationSection */}
      <section className="exploration-section">
        <Exploration />
      </section>
      {/* Gallery Or Marsian Life */}
      <section className=" px-24 mt-16 w-full h-screen">
        <Gallery />
      </section>
    </div>
  );
};

export default Home;
