import React from 'react'
import VRWeldHero from './VRWeldHero'
import { Sliders } from 'lucide-react'
import KeyBenefits from './KeyBenefits'
import Mindsets from './Mindsets'
import ShapeLearners from './ShapeLearners'
import VRweldSafety from './VRweldSafety'
import HeroSection from './HeroSection'
import MultiplyerClassroom from './MultiplyerClassroom'

const VRMechatronics = () => {
  return (
    <div>
        <VRWeldHero/>
       <VRweldSafety/>
       <Mindsets/>
       <MultiplyerClassroom/>
        <KeyBenefits/>
         
        <ShapeLearners/>
        <HeroSection/>
    </div>
  )
}

export default VRMechatronics