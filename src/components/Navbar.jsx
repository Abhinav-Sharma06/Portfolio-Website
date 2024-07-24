import React from 'react'


export const Navbar = () => {
  const hoverClass = 'hover:text-cyan-100';

  return (
    <div className="w-screen h-[3.5rem] bg-richblue-900 flex items-center justify-between pl-20 pr-14 text-cyan-400 text-[1.2rem] ">

      <h5 className='text-3xl font-bold text-cyan-500' style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Abhinav Sharma</h5>

      <div className='flex gap-[1.3rem] font-normal'>
      <a href="#Home" className={hoverClass}>Home</a>
      <a href ="#About" className={hoverClass}>About</a>
      <a href ="#Skills" className={hoverClass}>Skills</a>
      <a href ="#Experience" className={hoverClass}>Experience</a>
      <a href ="#Projects" className={hoverClass}>Projects</a>
      <a href ="#Achievements" className={hoverClass}>Achievements</a>
      </div>
    </div>
  )
}
