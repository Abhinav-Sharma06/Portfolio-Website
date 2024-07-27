import React from 'react'

export const ExperienceCard = ({logo,organisation,role,duration,description1, description2}) => {
  return (
    <div className='h-[27rem] w-[17rem] sm:h-[26rem] sm:w-[21rem] xs:h-[28rem] xs:w-[19rem] md:h-[30rem] md:w-[21rem] xl:h-[33.5rem] flex flex-col items-center gap-6 bg-richblue-900 py-4 rounded-md shadow-md shadow-cyan-400 text-wrap hover:text-cyan-400 hover:scale-105 transition-all  duration-1000'>
        <img src={logo} alt='logo' className='h-[5rem] w-[7rem] xs:h-[6rem] xs:w-[8rem]  md:h-[7rem] md:w-[9rem] object-cover rounded-md shadow-md shadow-cyan-400'  loading='lazy'/>
        <div className='flex flex-col items-start'>
        <h3 className='text-xl md:text-2xl font-semibold'>{organisation}</h3>
        <p className='text-md md:text-lg xl:text-xl font-normal'>{role}</p>
        <p className='text-md md:text-lg xl:text-xl font-normal'>{duration}</p>
        </div>
        <ul className='px-6 list-disc flex flex-col items-center gap-2'>
          <li><p className='text-sm md:text-md xl:text-lg font-normal'>{description1}</p></li>
          <li><p className='text-sm md:text-md xl:text-lg font-normal'>{description2}</p></li>
        </ul>
    </div>
  )
}
