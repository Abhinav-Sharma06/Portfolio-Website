import React from 'react'
import { FaLaptopCode } from "react-icons/fa";
import { skillsData } from '../data/skillsData';
import { SkillCard } from './SkillCard';

export const Skills = () => {
  return (
    <div className='text-white mb-14 '>
     <h2 className='flex flex-wrap justify-center items-center gap-2 text-4xl mt-8 font-semibold'><FaLaptopCode className='] text-cyan-400 text-5xl'/> Skills</h2>

     <div className='mt-6 w-[91%] mx-auto grid grid-cols-6 gap-6 p-4'>
     {skillsData.map((skill) => (<SkillCard key={skill.id} icon={skill.logo} name={skill.name}/>) )}
     </div>
    </div>
  )
}
