import React from 'react'
import { FaLink } from "react-icons/fa";

export const ProjectCard = ({image,title,desc,link,techStack}) => {
  return (
    <div className='h-[34rem] w-[17rem] sm:h-[29rem] sm:w-[21rem] xs:h-[32rem] xs:w-[19rem] md:h-[32.5rem] xl:h-[38.5rem]  flex flex-col items-center gap-[0.7rem] bg-richblue-900  rounded-md shadow-md shadow-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all  duration-1000'>
        <img src={image} alt='logo' className='h-[7rem] md:h-[9rem] w-full object-cover rounded-md shadow-md shadow-cyan-400'  loading='lazy'/>
        <div className='flex flex-col items-start gap-[0.6rem] px-4 '>
        <h3 className='text-xl md:text-2xl xl:3xl font-semibold text-center w-full'>{title}</h3>
        <p className='text-md xl:text-lg font-normal'>{desc}</p>
        <a href={link} target='_blank' rel='noreferrer' className='text-cyan-400 text-md md:text-lg xl:text-xl font-semibold hover:text-cyan-100 flex items-center gap-2'><FaLink/> View Project</a>
        </div>
        <div className='flex flex-wrap items-center justify-start pl-2'>
          {techStack.map((tech) => (<span key={tech.index} className='text-sm md:text-md xl:text-lg font-semibold bg-cyan-400 text-richblue-900 px-2 py-1 rounded-md  m-1 text-center'>{tech}</span>))}
     </div>
    </div>
  )
}
