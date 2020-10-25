import React from 'react'
import Header from './Header'
import AllProductSection from './AllProductSection'

interface WeatherDetails {
  id?: number,
  main?: string,
  description?: string,
  icon?: string
}

function HomePage() {
const [weather, setWeather] = React.useState<WeatherDetails>()

  const updateWeather = (weatherData:any)=> {
    setWeather(weatherData)
  }

    return (
      <>
      <Header updateWeather={updateWeather} weather={weather} />
      {weather && weather.id? 
      <AllProductSection weather={weather} /> : 
      <AllProductSection weather={0} /> }
      
      </>
    )
  
}

export default HomePage