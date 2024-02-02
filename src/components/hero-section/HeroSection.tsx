// import React from 'react'
import { Suspense} from "react";
import "./hero_style.scss";
import { Environment,OrbitControls,  } from "@react-three/drei";
import { Model } from "../mars_model/Model.tsx";

import { Canvas} from '@react-three/fiber'

const HeroSection = () => {

  return (
    <div id="heroSection">
      {/* Background Circles */}
      <div className="absolute left_blob blob"></div>
      <div className="absolute right_blob blob"></div>
      {/* 3d Marse  */}
      <Canvas camera={{ position: [0, 0, 3] }}  id="Canvas">
          <Suspense fallback={null}>
            {/* <ambientLight intensity={0.1} /> */}
            <Model/>
            {/* minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.55}  */}
          <OrbitControls enablePan={false}/>
             <Environment preset="sunset" background={false}  />
          </Suspense>
      </Canvas>
      {/* Head Line */}
      <h1 className="headTAG">MARS</h1>


      {/* Other decoration */}

      <div className="Other_decoration">
        <div className="left_paragraph">
          <p>
            Make Your dream come true
            <br />
            Enjoy Marsian trip
          </p>
        </div>

        <div className="right_tickets">Buy Tickets</div>
      </div>
    </div>
  );
};

export default HeroSection;
