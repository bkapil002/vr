import React from 'react'
import Slider from '../Pages/Slider'
import TrainingPrograms from '../Pages/TrainingPrograms'
import TradeVRSection from '../Pages/TradeVRSection'
import BusinessSection from '../Pages/BusinessSection'
import ProductsSection from '../Pages/ProductsSection'

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
