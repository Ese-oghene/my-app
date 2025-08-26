import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Feature from '../components/Feature'
import HowWorks from '../components/HowWorks'
// import testimonies from '../components/testimonials'

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Feature />
      {/* <testimonies */}
      <HowWorks />
    </>
  )
}

export default Home
