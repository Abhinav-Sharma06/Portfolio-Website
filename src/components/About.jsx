import React from 'react'
import { IoMdContact } from "react-icons/io";

export const About = () => {
  return (
    <div className='text-white mb-14'>
      <h2 className='flex flex-wrap justify-center items-center gap-1 text-4xl mt-8 font-semibold'><IoMdContact className=' text-cyan-400 text-5xl '/> About Me</h2>
      <div className='w-11/12 mx-auto mt-6 text-white text-[1.13rem] px-4 text-wrap text-justify'>
        <p>Hello! I'm <span className='text-2xl text-cyan-400'>Abhinav Sharma</span> , a passionate web developer with a strong enthusiasm for creating dynamic and user-friendly web applications. As a final-year Information Technology student at Thakur College of Engineering and Technology, Mumbai, I have honed my skills in both frontend and backend development. My expertise includes HTML, CSS, JavaScript, React, Redux Toolkit, Node.js, Express.js, and MongoDB. I am dedicated to building responsive designs and ensuring cross-browser compatibility, always striving to optimize performance and user experience.</p> 

        <p className='mt-6'>In addition to my development skills, I have a solid understanding of data structures and algorithms, which I put to good use while working as a problem setter and tester at the TCET Shastra Coding Club. There, I designed challenging problems that helped fellow students enhance their problem-solving abilities. My experience in API integration, version control with Git and GitHub, and cloud services like AWS has equipped me with the tools to tackle complex projects and deliver high-quality results on time. I am committed to continuous learning and growth, eager to take on new challenges, and contribute effectively to innovative projects.</p>
      </div>
    </div>
  )
}
