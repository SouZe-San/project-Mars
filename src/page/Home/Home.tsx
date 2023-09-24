
// import React from 'react'
import HeroSection from '../../components/hero-section/HeroSection'
import Navbar from '../../components/navbar/Navbar'
import './home_style.scss'

const Home = () => {
  return (
    <div className="bgBlur ">
      <section className='hero-section'> 
        {/* NavSection */}
        <header>
        <Navbar/>
        </header>
        {/* HeroSection */}
        <HeroSection/>
      </section>
        {/*  */}
      this is home
    </div>
  )
}

export default Home
