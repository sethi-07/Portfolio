import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <div className='min-h-srceen bg-background text-foreground overflow-x-hidden'>
      {/* Theme toggle */}
      <ThemeToggle/>
      {/* Meteor Shower */}
      <StarBackground/>
      {/* Navbar */}
      <Navbar/>
      {/* Main */}
      <main>
        <HeroSection/>
        <AboutSection/>
      </main>
      {/* Footer */}
    </div>
  )
}

export default Home