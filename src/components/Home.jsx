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
      <TrainingPrograms/>
      <TradeVRSection/>
      <BusinessSection/>
    </div>
  )
}

export default Home
