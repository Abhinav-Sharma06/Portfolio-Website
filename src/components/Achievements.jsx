import React from 'react'
import { GiAchievement } from "react-icons/gi";
import Hackerrank from '../assets/hackerrank.png';
import LeetCode from '../assets/leetcode.png';
import WebDev from '../assets/Codehelp.png';
import Internship from '../assets/Internship.jpg';
import Java from '../assets/hackerrank-java.png';

export const Achievements = () => {
  return (
    <div id='Achievements' className='text-white mb-14'>
        <h3 className='flex flex-wrap justify-center items-center gap-1 text-3xl md:text-4xl mt-8 font-semibold'><GiAchievement className='text-4xl md:text-5xl text-cyan-400'/> Achievements</h3>

        <div className='w-11/12 xl:w-[75%] mx-auto mt-8 font-medium text-white  px-6 '>
            <p className='text-xl md:text-2xl font-semibold text-center md:text-start'>Coding Profiles :  </p>
           <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 py-4 text-lg md:text-xl'>
          
                <a href='https://leetcode.com/u/Abhinav_6604/' target="_blank" rel="noreferrer" className='flex flex-wrap items-center gap-4 p-4 bg-richblue-900 justify-center rounded-md shadow-md shadow-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all  duration-1000'><img src={LeetCode} alt='Leetcode' className='h-11 w-11 p-2 bg-cyan-400 rounded-md shadow-sm shadow-cyan-400'/> <p>LeetCode</p></a>

                <a href='https://www.hackerrank.com/profile/abhinavsharma6' target="_blank" rel="noreferrer" className='flex flex-wrap items-center gap-4 p-4 bg-richblue-900 justify-center rounded-md shadow-md shadow-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all  duration-1000 '><img src={Hackerrank} alt='Leetcode' className='h-11 w-11 p-2 bg-cyan-400 rounded-md shadow-sm shadow-cyan-400'/> <p>Hackerrank</p></a>
            </div>  

            
       
      </div>

      <div className='w-11/12 xl:w-[75%] mx-auto mt-8 font-medium text-white  px-6 '>
            <p className='text-xl md:text-2xl font-semibold text-center md:text-start'>Certifications :  </p>

           <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 py-4 lg:text-lg md:text-xl xl:text-[1.3rem]'>
                <a href={WebDev} target="_blank" rel="noreferrer" className='flex flex-wrap items-center gap-4 p-4 bg-richblue-900 justify-center rounded-md shadow-md shadow-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all  duration-1000'> <p>Full Stack Web Development</p></a>

                <a href={Java} target="_blank" rel="noreferrer" className='flex flex-wrap items-center gap-4 p-4 bg-richblue-900 justify-center rounded-md shadow-md shadow-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all  duration-1000'><p>Hackerrank Java Proficiency</p></a>

                <a href={Internship} target="_blank" rel="noreferrer" className='flex flex-wrap items-center gap-4 p-4 bg-richblue-900 justify-center rounded-md shadow-md shadow-cyan-400 hover:text-cyan-400 hover:scale-110 transition-all  duration-1000'><p>Web Development Internship</p></a>
            </div>  

            
       
      </div>
    </div>
  )
}