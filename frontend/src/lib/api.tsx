import axios from 'axios'

export const getWeatherData = async ([latitude,longitude]:Number[]) => {
  const key = process.env.REACT_APP_WEATHER_API_KEY
    return await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${key}&exclude=minutely,hourly,current`)
  } 


  export const getOneItem = async(clothesId:string) => {
    return await axios.get(`api/clothes/${clothesId}`)
  }

  export const getClothesRequest = async(weatherId:number) => {
    return await axios.get(`api/clothes/weather/${weatherId}`)
  }


  export function getWeatherSymbols(weatherCode: number) {
    const baseUrl = 'http://openweathermap.org/img/wn/'
    switch (weatherCode) {
      case 0:
        return  baseUrl + '10d@2x.png'
        break;
      case 2:
        return  baseUrl + '11d@2x.png'
        break;
      case 3:
        return  baseUrl + '09d@2x.png'
        break;
      case 5:
        return  baseUrl + '10d@2x.png'
        break;
      case 6:
        return  baseUrl + '13d@2x.png'
        break;
      case 7:
        return  baseUrl + '50d@2x.png'
        break;
      case 8:
        return  baseUrl + '01d@2x.png'
        break;
    }
  }