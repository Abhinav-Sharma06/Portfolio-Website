import React from 'react'

export const SkillCard = ({icon,name}) => {
  return (
    <div className='h-[9rem] w-[7.5rem] xs:h-[8rem] xs:w-[6.6rem] md:h-[11rem] md:w-[10rem] lg:h-[11rem] lg:w-[10rem] xl:h-[11rem] xl:w-[10rem] flex flex-col items-center justify-around bg-richblue-900 py-4 rounded-md shadow-md shadow-cyan-400 '>
        <img src={icon} alt='skill icon' className='h-[3.5rem] w-[3.5rem] xs:h-[3rem] xs:w-[3rem] md:h-[4.5rem] md:w-[4.5rem] lg:h-[4.5rem] lg:w-[4.5rem] xl:h-[4.5rem]xl:w-[4.5rem] object-contain ' loading='lazy'/>
        <p className='text-[1.1rem] md:text-[1.3rem] text-center'>{name}</p>
    </div>
  )
}
