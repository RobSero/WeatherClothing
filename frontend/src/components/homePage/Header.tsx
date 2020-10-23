import React from 'react';
import {getWeatherData} from '../../lib/api'

export default function Header(props:any) {
  const [locationCoords, setCoords] = React.useState([51.5074,0.1278])


  React.useEffect(()=> {
    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(({coords})=> {
        console.log(coords);
        setCoords([coords.latitude, coords.longitude])
      })
    }
  }, [])

  const findWeatherData = async() => {
    try {
      const res = await getWeatherData(locationCoords)
      props.updateWeather(res.data.daily[3].weather[0])
  }
  catch(err){
    console.log(err);
    
  }}


  return (
    <header className='heading-container primary'>
      <img className='header-logo' src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1603290472/whitepropeller_l2scuy.png' />
      <h1>find the perfect clothes
for the weather</h1>
<p>Get them delivered right in time for the day</p>
<button onClick={findWeatherData}>Weather Check</button>
    </header>
  );
}
