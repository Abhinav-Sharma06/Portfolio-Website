import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import {projectData} from '../data/projectData'
import { ProjectCard } from './ProjectCard';

export const Projects = () => {

  return (
    <div id='Projects' className='text-white mb-14 '>
      <h2 className='flex flex-wrap justify-center items-center gap-2 text-3xl md:text-4xl mt-8 font-semibold'><FaLaptopCode className=' text-cyan-400 text-4xl md:text-5xl'/>Projects</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:w-[75%] gap-8 md:gap-10 lg:gap-6 xl:gap-10 p-4 mt-6 w-[91%] mx-auto justify-items-center'>

        {projectData.map((project) => (<ProjectCard key={project.id} image={project.image} title={project.title} desc ={project.desc} link = {project.link} techStack = {project.techStack} />))}
      </div>
    </div>
  )
}