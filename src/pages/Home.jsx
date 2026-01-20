import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'

const Home = () => {
  return (
    <div className='min-h-srceen bg-background text-foreground overflow-x-hidden'>
      {/* Theme toggle */}
      <ThemeToggle/>
      {/* Meteor Shower */}
      <StarBackground/>
      {/* Navbar */}
      {/* Main */}
      {/* Footer */}
    </div>
  )
}

export default Home