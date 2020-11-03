import React from 'react';
import { getWeatherData } from '../../lib/api'
import { WEATHER_QUERY } from '../../lib/graphQLQueries'
import { Query } from 'react-apollo'
import Scroll from 'react-scroll';
import { useQuery } from '@apollo/client';
const scroll = Scroll.animateScroll


export default function Header(props: any) {
  const [locationCoords, setCoords] = React.useState([51.5074, 0.1278])
  const [loadingSpinner, setLoadingSpin] = React.useState(false)
  const [weatherInfo, setWeather] = React.useState()


  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        setCoords([coords.latitude, coords.longitude])
      })
    }
  }, [])

  const findWeatherData = async () => {
    try {
      setLoadingSpin(true)
      setTimeout(() => {
        props.updateWeather(weatherInfo)
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
      {/* GRAPH QL QUERY FOR WEATHER */}
      <Query query={WEATHER_QUERY} variables={{ day: 2, lat: locationCoords[0], lon: locationCoords[1] }}>
        {
          ({ loading, error, data }: any) => {
            if (loading) return <>loading</>
            if (error) {
              return <p></p>
            }console.log(error)
            const { description, icon, } = data.forecast.weather[0]
            console.log(data)
            setTimeout(()=>{
              if(data && data.forecast){
                setWeather(data.forecast.weather[0])
              }
            },1000)
//         DISPLAY GET WEATHER BUTTON OR WEATHER ICON
            if (props.weather) {
              return (
                <div className='animate__animated animate__zoomInDown'>
                  <img className='weather-main-logo' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
                  <p>next week will be {description}</p>
                </div>)
            } else {
              return <button className='btn-grad' onClick={findWeatherData}>Weather Check</button>
            }
          }
        }
      </Query>
    </header>
  );
}
