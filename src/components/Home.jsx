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
    <div className=' mb-8'>
    <div className='flex flex-wrap items-center justify-around leading-tight '>
    <div className='text-white w-[47%] text-[3.5rem] self-start pt-10'>
      Hi👋I am a <span className='text-cyan-400 font-medium'>Abhinav</span> and I am a passionate <TypeAnimation
      sequence={[
        
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
      speed={50}
      style={{ fontSize: '3.5rem', display: 'inline-block','font-weight': '500'}}
      repeat={Infinity}
      className='text-cyan-400'
    />

    </div>
      <img src={myPic} alt='profile pic' loading='lazy' height={350} width={350} className='mt-4 rounded-full translate-x-[-50px] shadow-lg shadow-cyan-400 '/>
    </div>

  <div className='translate-y-[-2.2rem] flex flex-col flex-wrap gap-6'>
    <a href={resume} rel='noreferrer' target='_blank' className='text-white'><button className='ml-[4.4rem] text-2xl text-center bg-cyan-700 w-[150px] h-[50px] rounded-md shadow-md shadow-cyan-400 hover:scale-110 transition-all  duration-1000'>Resume</button></a>

    <div className='flex flex-wrap justify-start items-center ml-[4.4rem] gap-4'>
      <a href="tel:+917972020405" rel="noreferrer" target='_blank'><FaPhone className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 hover:scale-125 transition-all  duration-1000'/></a>

      <a href="mailto:abhinavsharma6604@gmail.com" rel="noreferrer" target='_blank'><IoIosMail className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 hover:scale-125 transition-all  duration-1000'/></a>

      <a href="https://www.linkedin.com/in/abhinav-sharma-24667922a/" rel="noreferrer" target='_blank'><IoLogoLinkedin className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 hover:scale-125 transition-all  duration-1000'/></a>

      <a href="https://github.com/Abhinav-Sharma06" rel="noreferrer" target='_blank'><FaGithub className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 hover:scale-125 transition-all  duration-1000'/></a>

      <a href="https://t.me/AbhinavSharma6" rel="noreferrer" target='_blank'><FaTelegramPlane  className='text-black bg-cyan-400 rounded-full h-10 w-10 p-2 hover:scale-125 transition-all  duration-1000'/></a>
    </div>
    </div>
  </div>
  
  )
}
