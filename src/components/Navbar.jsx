import React, { useEffect, useState } from 'react'
import { connector } from '../lib/utils'
import { Menu, X } from "lucide-react";

const navItems = [
  {name: "Home", href: "#hero"},
  {name: "About", href: "#about"},
  {name: "Skills", href: "#skills"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
]
const Navbar = () => {

  const [isScrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(true);

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
            <span className='text-glow text-foreground'>Portfolio</span> 
          </span>
        </a>

      {/* Desktop Nav */}
      <div className='hidden md:flex space-x-8'>
        {
          navItems.map((item,key) => (
            <a key = {key}
             href = {item.href} 
             className='text-foreground/80 hover:text-primary transition-colors duration-300 font-bold'>
              {item.name}
            </a>
          ))}
      </div>

      {/* Mobile Nav */}

        <button 
          onClick={() => setMenuOpen((prev) => !prev)}
          className='md:hidden p-2 text-foreground z-50'
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size = {24} /> : <Menu size = {24} /> }{" "}
        </button>

        <div className={connector("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
        "transition-all duarion-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}>
          <div className='flex flex-col space-y-8'>
            {
              navItems.map((item,key) => (
                <a key = {key}
                href = {item.href} 
                className='text-foreground/80 hover:text-primary transition-colors duration-300 font-bold'
                onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))
            }
          </div>
        </div>

      </div>

    </nav>
  )
}

export default Navbar