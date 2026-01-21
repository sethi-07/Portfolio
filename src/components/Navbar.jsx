import React, { useEffect, useState } from 'react'
import { connector } from '../lib/utils'

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
]
const Navbar = () => {

  const [isScrolled, setScrolled] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      setScrolled(window.screenY > 10)
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <nav className={connector("fixed w-full z-40 transition-all duration-300",
      isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

      <div className='container flex items-center justify-between'>
        <a href = "#hero"
        className='text-3xl font-bold flex items-center text-primary'>
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>Abhinandan's</span> 
          {" "}Portfolio</span>
        </a>

      {/* Desktop Nav */}
      <div className='hidden md:flex space-x-8'>
        {
          navItems.map((item,key) => (
            <a key = {key} href = {item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300 font-bold'>{item.name}</a>
          ))
        }
      </div>

      {/* Mobile Nav */}
        

      </div>

    </nav>
  )
}

export default Navbar