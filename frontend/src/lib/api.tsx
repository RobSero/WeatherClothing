import axios from 'axios'

export const getWeatherData = async ([latitude,longitude]:Number[]) => {
  const key = process.env.REACT_APP_WEATHER_API_KEY
    return await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&exclude=minutely,hourly,current`)
  } 
