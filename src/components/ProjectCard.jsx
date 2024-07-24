import React from 'react'
import { FaLink } from "react-icons/fa";

export const ProjectCard = ({image,title,desc,link,techStack}) => {
  return (
    <div className='h-[33rem] w-[21rem] flex flex-col items-center gap-[0.7rem] bg-richblue-900  rounded-md shadow-md shadow-cyan-400 hover:text-cyan-400 hover:scale-105 transition-all  duration-1000'>
        <img src={image} alt='logo' className='h-[152px] w-full object-cover rounded-md shadow-md shadow-cyan-400'  loading='lazy'/>
        <div className='flex flex-col items-start gap-[0.6rem] px-4 '>
        <h3 className='text-2xl font-semibold text-center w-full'>{title}</h3>
        <p className='text-md font-normal'>{desc}</p>
        <a href={link} target='_blank' rel='noreferrer' className='text-cyan-400 text-lg font-semibold hover:text-cyan-100 flex items-center gap-2'><FaLink/> View Project</a>
        </div>
        <div className='flex flex-wrap items-center justify-start pl-2'>
          {techStack.map((tech) => (<span key={tech.index} className='text-md font-semibold bg-cyan-400 text-richblue-900 px-2 py-1 rounded-md  m-1 text-center'>{tech}</span>))}
     </div>
    </div>
  )
}
