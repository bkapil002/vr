import React from 'react'
import Hero from './Hero'
import OpportunitySection from './OpportunitySection'
import CommitmentsSection from './CommitmentsSection'
import DiscoverAndCultureSection from './DiscoverAndCultureSection'
import CorporateValues from './CorporateValues'
import SocialMedia from './SocialMedia'

const About = () => {
  return (
    <>
    <Hero/>
    <div className='flex justify-center'>
    <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 '>
    
    <OpportunitySection/>
    <CommitmentsSection/>
    <DiscoverAndCultureSection/>
    <CorporateValues/>
    <SocialMedia/>
    </div>
    </div>
    </>
  )
}

export default About
