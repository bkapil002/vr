import React from 'react'
import VRWeldHero from './VRWeldHero'
import { Sliders } from 'lucide-react'
import KeyBenefits from './KeyBenefits'
import Mindsets from './Mindsets'
import ShapeLearners from './ShapeLearners'
import VRweldSafety from './VRweldSafety'
import HeroSection from './HeroSection'

const VRSterile = () => {
  return (
    <div>
        <VRWeldHero/>
       <VRweldSafety/>
        <KeyBenefits/>
         <Mindsets/>
        <ShapeLearners/>
        <HeroSection/>
    </div>
  )
}

export default VRSterile