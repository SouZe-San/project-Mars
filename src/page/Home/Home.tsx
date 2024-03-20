import { useState } from "react";

// Component import
import ArrowIcon from "../../components/Arrow/ArrowIcon";
import Exploration from "../../components/Exploration/Exploration";
import FactSection from "../../components/Fact-section/FactSection";
import Gallery from "../../components/Gallery/Gallery";
import HeroSection from "../../components/hero-section/HeroSection";
import marsSvg from "../../assets/iconSvg/mars.svg";
import Navbar from "../../components/navbar/Navbar";
import ProcessProcessing from "../../components/ProcessProcessing/ProcessProcessing";
import rocketSvg from "../../assets/iconSvg/rocket.png";
import TextSlider from "../../components/textSlideing/TextSlider";
import TicketContainer from "../../components/TicketCenter/Container";

// style import
import "./home_style.scss";

const Home = () => {
  const [whatBtnClicked, setWhatBtnClicked] = useState<btnProps>({
    posNumber: 0,
    whatSideClicked: "",
  });

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
        {/* //^ ARROW BUTTON  */}
        <div className="absolute flex justify-between w-full left-0">
          {/*//! if Clicked the transform translate: 25%; */}
          <div
            className="rotate-180 cursor-pointer"
            onClick={() => {
              if (whatBtnClicked.posNumber !== 0)
                setWhatBtnClicked({
                  posNumber: whatBtnClicked.posNumber - 1,
                  whatSideClicked: "leftBtn",
                });
            }}
          >
            <ArrowIcon />
          </div>
          {/*//!if Clicked the transform translate: -25%; */}
          <div
            className=" cursor-pointer"
            onClick={() => {
              // arrayLength - 2
              if (whatBtnClicked.posNumber < 5)
                setWhatBtnClicked({
                  posNumber: whatBtnClicked.posNumber + 1,
                  whatSideClicked: "rightBtn",
                });
            }}
          >
            <ArrowIcon />
          </div>
        </div>

        <Gallery whatBtnClicked={whatBtnClicked} />
      </section>

      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    Text Sliding - MARS PLANET     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      <section className="mt-20 pb-16">
        <TextSlider text="Mars Planet" img={marsSvg} />
      </section>

      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    PROCESS FOR PROCESSING     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}

      <section id="process" className="mt-16 px-24 w-full h-[80vh]">
        <ProcessProcessing />
      </section>

      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    TICKET CENTER     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}

      <section id="ticket" className="mt-16 px-24 w-full h-screen">
        <h1 className="header_tag mb-12">Available ticket</h1>
        <TicketContainer />
      </section>
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    FACT SECTION    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}

      <section className="mt-16 w-full px-24 h-screen">
        <h1 className="header_tag mb-12">Lifelong Facts</h1>
        <FactSection />
      </section>
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    Text Sliding - SPACE TRAVEL     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}

      <section className="mt-20 pb-16">
        <TextSlider text="SPACE TRAVEL" img={rocketSvg} />
      </section>

      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    SOME NEWS    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      <section id="news" className="mt-16 px-24 w-full h-screen">
        <h1 className="header_tag mb-12">Marsian News</h1>
      </section>
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    CONTACT ME    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
      {/*// @@@@@@@@@@@@@@@@@@@@@@@@@@@@    FOOTER    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  */}
    </div>
  );
};

export default Home;
