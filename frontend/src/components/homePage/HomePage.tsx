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
const [weather, setWeather] = React.useState<WeatherDetails>({id:0})

  const updateWeather = (weatherData:any)=> {
    console.log('GETTING WEATHER')
    setWeather(weatherData)
  }

    return (
      <>
      <Header updateWeather={updateWeather} weather={weather} />
      <AllProductSection weather={weather.id} />
      </>
    )
  
}

export default HomePage