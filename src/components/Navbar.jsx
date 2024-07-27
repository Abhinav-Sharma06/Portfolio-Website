import React from 'react'
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";


export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const hoverClass = 'hover:text-cyan-100';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-[3.5rem] bg-richblue-900 flex items-center justify-around gap-4 xs:justify-center xs:gap-8 xs:pl-14 sm:gap-12 sm:pl-[4.5rem] md:gap-44 lg:gap-0  lg:justify-between xl:justify-around md:pl-52 lg:pl-20  lg:pr-14 text-cyan-400 text-[1.2rem] xl:text-2xl  xl:pr-6 xl:pl-28">

    
      <h5 className='text-2xl xs:text-3xl xl:text-4xl font-bold text text-cyan-500' style={{ textShadow: '1px 1px 2px rgba(255, 255, 255, 0.8)' }}>Abhinav Sharma</h5>
    
      <div className='hidden lg:flex gap-[1.3rem] font-normal'>
      <a href="#Home" className={hoverClass + 'focus:text-cyan-400'}>Home</a>
      <a href ="#About" className={hoverClass + 'focus:text-cyan-400'}>About</a>
      <a href ="#Skills" className={hoverClass + 'focus:text-cyan-400'}>Skills</a>
      <a href ="#Experience" className={hoverClass + 'focus:text-cyan-400'}>Experience</a>
      <a href ="#Projects" className={hoverClass + 'focus:text-cyan-400'}>Projects</a>
      <a href ="#Achievements" className={hoverClass + 'focus:text-cyan-400'}>Achievements</a>
      </div>

     

        <button onClick={toggleMenu} className="text-cyan-400 lg:hidden pt-2 ">
          {isOpen ? <MdCancel size={30} /> : <GiHamburgerMenu size={30} />}
        </button>

        {isOpen && (
        <div className="absolute top-[3.5rem] mt-[1px] left-0 w-full bg-richblue-900 flex flex-col items-center text-cyan-400 transition-all lg:hidden">
          <a href="#Home" className={hoverClass + ' py-2 focus:text-cyan-400'} onClick={toggleMenu}>Home</a>
          <hr className='border-cyan-400  w-[70%] mx-auto '/>

          <a href="#About" className={hoverClass + ' py-2 focus:text-cyan-400'} onClick={toggleMenu}>About</a>
          <hr className='border-cyan-400  w-[70%] mx-auto '/>

          <a href="#Skills" className={hoverClass + ' py-2 focus:text-cyan-400'} onClick={toggleMenu}>Skills</a>
          <hr className='border-cyan-400  w-[70%] mx-auto '/>

          <a href="#Experience" className={hoverClass + ' py-2 focus:text-cyan-400'} onClick={toggleMenu}>Experience</a>
          <hr className='border-cyan-400  w-[70%] mx-auto '/>

          <a href="#Projects" className={hoverClass + ' py-2 focus:text-cyan-400'} onClick={toggleMenu}>Projects</a>
          <hr className='border-cyan-400  w-[70%] mx-auto '/>

          <a href="#Achievements" className={hoverClass + ' py-2 focus:text-cyan-400'} onClick={toggleMenu}>Achievements</a>
        </div>
        )}
      
   </div>

  )
}
