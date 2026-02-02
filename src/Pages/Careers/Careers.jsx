import React from 'react'
import CareersHero from './CareersHero'
import MissionSection from './MissionSection'
import LifeAtTradeVR from './LifeAtTradeVR'

const Careers = () => {
  return (
    <div>
      <CareersHero/> 
      <div className=' flex justify-center'>
        <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 '>
        <MissionSection/>
        <LifeAtTradeVR/>
        </div>
        </div> 
    </div>
  )
}

export default Careers