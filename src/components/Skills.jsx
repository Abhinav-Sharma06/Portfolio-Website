import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { skillsData } from '../data/skillsData';
import { SkillCard } from './SkillCard';

export const Skills = () => {
  return (
    <div id='Skills' className='text-white mb-14'>
      <h2 className='flex flex-wrap justify-center items-center gap-2 text-3xl md:text-4xl mt-8 font-semibold'>
        <FaLaptopCode className='text-cyan-400 text-4xl md:text-5xl' /> Skills
      </h2>

      <div className='mt-6 w-[91%] xl:w-[75%] mx-auto grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 gap-6 p-2 md:grid-cols-4 sm:gap-4 lg:grid-cols-6 md:gap-10 md:p-4 lg:gap-6 xl:gap-8  justify-items-center'>
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} icon={skill.logo} name={skill.name} />
        ))}
      </div>
    </div>
  );
};
