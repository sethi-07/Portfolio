import React, { useEffect, useState } from 'react'

// id, size, x , y, opacity, animationDuration
// id, size, x , y, delay, animationDuration

const StarBackground = () => {

  const [stars, setStars] = useState([]);
  const [fallingStars, setFallingStars] = useState([]);

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize",handleResize);
    return () => window.removeEventListener("resize",handleResize);
  }, []);

  const generateStars = () => {
  const numberOfStars = Math.floor(window.innerHeight * window.innerWidth / 10000);
  const newStars = [];
  const newFallingStars = [];
  for(let i = 0; i < numberOfStars ; i++)
    {
    newStars.push({
      id:i,
      size: Math.random() * 3 + 1, //random gives a number bw 0,1 so size will be between [1,4]
      x: Math.random() * 100,
      y: Math.random() * 100,  //viewport percentage
      opacity: Math.random() * 0.5 + 0.5,  //opacity between 0.5 and 1
      animationDuration: Math.random() * 4 + 2,
    });
    }

    for(let i = 0; i < 8 ; i++)
    {
      newFallingStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      })
    }

  setStars(newStars);
  setFallingStars(newFallingStars);
};


  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {
      stars.map((star)=> (
        <div key = {star.id} className='star animate-pulse-subtle' style = {{
          width: star.size + "px",
          height: star.size + "px",
          left: star.x + "%",
          top: star.y + "%",
          opacity: star.opacity,
          animationDuration: star.animationDuration + "S",
        }}/>
      ))
      }
      {
      fallingStars.map((fallingStar)=> (
        <div key = {fallingStar.id} className='meteor animate-meteor' style = {{
          width: fallingStar.size + "px",
          height: fallingStar.size + "px",
          left: fallingStar.x + "%",
          top: fallingStar.y + "%",
          animationDelay: fallingStar.delay,
          animationDuration: fallingStar.animationDuration + "S",
        }}/>
      ))
      }
    </div>
  )
}

export default StarBackground