import React from 'react'
import Header from './Header'
import AllProductSection from './AllProductSection'


function HomePage() {
const [weather, setWeather] = React.useState(null)

  const updateWeather = (weatherData:any)=> {
    console.log('GETTING WEATHER')
    setWeather(weatherData)
  }

    return (
      <>
      <Header updateWeather={updateWeather} />
      <AllProductSection />
      </>
    )
  
}

export default HomePage