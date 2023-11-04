// import React from 'react'
import "./hero_style.scss";
const HeroSection = () => {
  return (
    <div id="heroSection">
      {/* Background Circles */}
      <div className="absolute left_blob blob"></div>
      <div className="absolute right_blob blob"></div>
      {/* Head Line */}
      <h1 className="headTAG">MARS</h1>

      {/* 3d Marse */}
      <canvas id="canvas" className="absolute"></canvas>

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
