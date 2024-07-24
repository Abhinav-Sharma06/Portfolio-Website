import React from 'react'

export const ExperienceCard = ({logo,organisation,role,duration,description1, description2}) => {
  return (
    <div className='h-[30rem] w-[21rem] flex flex-col items-center gap-6 bg-richblue-900 py-4 rounded-md shadow-md shadow-cyan-400 text-wrap hover:text-cyan-400 hover:scale-105 transition-all  duration-1000'>
        <img src={logo} alt='logo' className='h-[7rem] w-[9rem] object-cover rounded-md shadow-md shadow-cyan-400'  loading='lazy'/>
        <div className='flex flex-col items-start'>
        <h3 className='text-2xl font-semibold'>{organisation}</h3>
        <p className='text-lg font-normal'>{role}</p>
        <p className='text-lg font-normal'>{duration}</p>
        </div>
        <ul className='px-6 list-disc flex flex-col items-center gap-2'>
          <li><p className='text-md font-normal'>{description1}</p></li>
          <li><p className='text-md font-normal'>{description2}</p></li>
        </ul>
    </div>
  )
}
