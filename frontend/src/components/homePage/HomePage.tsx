import React from 'react'
import Header from './Header'
import AllProductSection from './AllProductSection'


function HomePage() {

  const updateWeather = (coords:any)=> {
    console.log('GETTING WEATHER' + coords);
  }

    return (
      <>
      <Header updateWeather={updateWeather} />
      <AllProductSection />
      </>
    )
  
}

export default HomePage