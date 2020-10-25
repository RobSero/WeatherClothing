import React from 'react';
import { getWeatherData } from '../../lib/api'
import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll




export default function Header(props: any) {
  const [locationCoords, setCoords] = React.useState([51.5074, 0.1278])
  const [loadingSpinner, setLoadingSpin] = React.useState(false)


  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setCoords([coords.latitude, coords.longitude])
      })
    }
  }, [])

  const findWeatherData = async () => {
    try {
      const res = await getWeatherData(locationCoords)
      const weatherData = res.data.daily[3].weather[0]
      setLoadingSpin(true)
      setTimeout(() => {
        props.updateWeather(weatherData)
        setLoadingSpin(false)
      }, 2500)
      setTimeout(() => {
        scroll.scrollTo(800)
      }, 4000)
    }
    catch (err) {
      console.log(err);
    }
  }


  return (
    <header className='heading-container primary'>
      <img className={loadingSpinner ? 'header-logo fast' : 'header-logo'} src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1603290472/whitepropeller_l2scuy.png' alt='windmill logo' />
      <h1>find the perfect clothes
for the weather</h1>
      <p>get them delivered right in time for the day</p>
      {!props.weather && !loadingSpinner ? <button className='btn-grad' onClick={findWeatherData}>Weather Check</button> : ''}

      {props.weather ? (
        <div className='animate__animated animate__zoomInDown'>
          <img className='weather-main-logo' src={`http://openweathermap.org/img/wn/${props.weather.icon}@2x.png`} alt={props.weather.description} />
          <p>next week will be {props.weather.description}</p>
        </div>
      ) : ''
      }
    </header>
  );
}
