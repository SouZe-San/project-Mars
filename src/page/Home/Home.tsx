// import React from 'react'

// Component import
import Exploration from "../../components/Exploration/Exploration";
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
      this is home
    </div>
  );
};

export default Home;
