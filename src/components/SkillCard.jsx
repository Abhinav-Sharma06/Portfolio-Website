import React from 'react'

export const SkillCard = ({icon,name}) => {
  return (
    <div className='h-[11rem] w-[10rem] flex flex-col items-center justify-around bg-richblue-900 py-4 rounded-md shadow-md shadow-cyan-400 '>
        <img src={icon} alt='skill icon' className='h-[4.5rem] w-[4.5rem] object-contain ' loading='lazy'/>
        <p className='text-[1.3rem] text-center'>{name}</p>
    </div>
  )
}
