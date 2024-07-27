import React from 'react'
import myPic from '../assets/MyPic 4.png'
import { TypeAnimation } from 'react-type-animation';
import resume from '../assets/Abhinavs_CV.pdf';
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

export const Home = () => {
  return (
    <div id='Home' className='mb-14 lg:mb-8 mx-auto xl:w-[75%] '>
    <div className='flex flex-col-reverse lg:flex-row flex-wrap items-center justify-around leading-tight  xl:justify-between pl-2 '>
    <div className='text-white text-center lg:text-start w-[87%] sm:w-[77%] md:w-[80%] mx-auto lg:mx-0 lg:w-[47%] xl:w-[51%] text-[2rem] lg:text-[3.5rem] self-start pt-10'>
      Hi👋I am a <span className='text-cyan-400 font-medium'>Abhinav</span> and I am a passionate <TypeAnimation
       preRenderFirstString={true}
      sequence={[
        'Web Developer.',
        1000, 
        'Frontend Developer.',
        1000, 
        'Backend Developer.',
        1000,
        'Full Stack Developer.',
        1000,
        'Node.js Developer.',
        1000,
        'Problem Solver.',
        1000
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
      className='text-cyan-400 text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] font-medium inline-block'
    />

    </div>
      <img src={myPic} alt='profile pic' loading='lazy'  className='mt-6 rounded-full lg:translate-x-[-45px] shadow-lg shadow-cyan-400 h-[17rem] w-[18rem] lg:h-[22rem] lg:w-[23rem] xl:h-[24rem] xl:w-[25rem]'/>
    </div>

  <div className='mt-12 lg:mt-0 lg:translate-y-[-4.5rem] xl:translate-y-[-4.5rem] flex flex-col items-center lg:items-start flex-wrap gap-6 xl:gap-8 lg:ml-[4.35rem] xl:ml-[0.7rem] '>
    <a href={resume} rel='noreferrer' target='_blank' className='text-white'><button className=' text-2xl xl:text-3xl text-center bg-cyan-700 w-[150px] h-[50px] xl:w-[200px] xl:h-[60px]  rounded-md shadow-md shadow-cyan-400 hover:scale-110 transition-all  duration-1000'>Resume</button></a>

    <div className='flex flex-wrap justify-start items-center gap-4 '>
      <a href="tel:+917972020405" rel="noreferrer" target='_blank'><FaPhone className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 xl:h-14 xl:w-14 xl:p-[0.8rem] hover:scale-125 transition-all  duration-1000'/></a>

      <a href="mailto:abhinavsharma6604@gmail.com" rel="noreferrer" target='_blank'><IoIosMail className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 xl:h-14 xl:w-14 xl:p-[0.8rem] hover:scale-125 transition-all  duration-1000'/></a>

      <a href="https://www.linkedin.com/in/abhinav-sharma-24667922a/" rel="noreferrer" target='_blank'><IoLogoLinkedin className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 xl:h-14 xl:w-14 xl:p-[0.8rem] hover:scale-125 transition-all  duration-1000'/></a>

      <a href="https://github.com/Abhinav-Sharma06" rel="noreferrer" target='_blank'><FaGithub className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 xl:h-14 xl:w-14 xl:p-[0.8rem] hover:scale-125 transition-all  duration-1000'/></a>

      <a href="https://t.me/AbhinavSharma6" rel="noreferrer" target='_blank'><FaTelegramPlane  className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 xl:h-14 xl:w-14 xl:p-[0.8rem] hover:scale-125 transition-all  duration-1000'/></a>
    </div>
    </div>
  </div>
  
  )
}