import React from 'react'
import { FaBriefcase } from "react-icons/fa";
import { experienceData } from '../data/experienceData';
import { ExperienceCard } from './ExperienceCard';

export const Experience = () => {
  return (
    <div className='text-white mb-14 '>
     <h2 className='flex flex-wrap justify-center items-center gap-3 text-4xl mt-8 font-semibold'><FaBriefcase className=' text-cyan-400 text-5xl'/>Work Experience</h2>

     <div className='mt-6 w-[91%] mx-auto grid grid-cols-3 gap-6 p-4'>
        {experienceData.map((experience) => (<ExperienceCard key={experience.id} logo={experience.logo} organisation={experience.organisation} role={experience.role} duration={experience.duration} description1={experience.description1} description2={experience.description2}/>))}
     </div>
    </div>
  )
}
