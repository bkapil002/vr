import React from 'react'
import Slider from './Slider'
import TrainingPrograms from './TrainingPrograms'
import TradeVRSection from './TradeVRSection'
import BusinessSection from './BusinessSection'
import ProductsSection from './ProductsSection'

const Home = () => {
  return (
    <div>
      <Slider/>
      <ProductsSection/>
      <div className=' flex justify-center  w-full'>
       <div className='max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 '>
      <TrainingPrograms/>
      <TradeVRSection/>
      <BusinessSection/>
      </div>
      </div>
    </div>
  )
}

export default Home
