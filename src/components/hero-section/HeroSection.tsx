// import React from 'react'
import './hero_style.scss'
const HeroSection = () => {
  return (
    <div id='heroSection'>
      {/* Background Circles */}
      <div className="absolute left_blob blob"></div>
      <div className="absolute right_blob blob"></div>
      {/* Head Line */}
      <h1 className='headTAG'>MARS</h1>

      {/* 3d Marse */}
      <canvas id='canvas'></canvas>

      {/* Other decoration */}

      

    </div>
  )
}

export default HeroSection
