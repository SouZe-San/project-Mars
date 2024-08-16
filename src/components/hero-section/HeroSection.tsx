// import React from "react";
import { Suspense } from "react";
import "./hero_style.scss";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import MarsModel from "../mars_model/MarsModel.tsx";

import img from "../../assets/hero-section/arrow.svg";
const HeroSection = () => {
  return (
    <div id="heroSection">
      {/* Background Circles */}
      <div className="absolute left_blob blob"></div>
      <div className="absolute right_blob blob"></div>
      {/* 3d Marse  */}
      <div className="middle_section relative my-16">
        <svg
          className="absolute z-10 rotating_circle"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="17" fill="transparent" />
          <circle cx="63.7" cy="40" r=".3" fill="#e84302" />
          <circle cx="63" cy="61" r=".3" fill="#e84302" />
          <circle cx="37" cy="39" r=".3" fill="#e84302" />
          <circle cx="37" cy="61" r=".3" fill="#e84302" />
        </svg>
        <Canvas camera={{ position: [0, 0, 3.1] }} id="Canvas" shadows>
          <Suspense fallback={<>Mars Coming ....</>}>
            <MarsModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
          <Environment preset="sunset" background={false} />
        </Canvas>
        {/* Head Line */}
        <h1 className="headTAG">
          <span>Ma</span>
          <span>RS</span>
        </h1>
      </div>
      {/* Other decoration */}

      <div className="Other_decoration">
        <div className="left_paragraph">
          <p>
            Make Your dream come true
            <br />
            Enjoy Marsian trip
          </p>
        </div>

        <div className="right_tickets">
          Buy Tickets
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
