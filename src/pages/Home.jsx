import React from 'react'
import Banner from '../components/Banner.jsx'
import Stats from '../components/Stats.jsx'
import MainSection from '../components/MainSection.jsx'
import Steps from '../components/Steps.jsx'
import Pricing from '../components/Pricing.jsx'

const Home = ({ cart, addToCart, removeFromCart, checkout }) => {
  return (
    <>
      <Banner />
      <Stats />
      <MainSection
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        checkout={checkout}
      />
      <Steps />
      <Pricing />
    </>
  )
}

export default Home
