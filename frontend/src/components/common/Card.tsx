import React from 'react'
import { Link } from 'react-router-dom'
import {getWeatherSymbols} from '../../lib/api'



export default function Card(props: any) {
  return (
    <div className='card-container'>

      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img className='card-image' src={props.image} />
          </div>
          <div className='card-back'>
            <h4>{props.title}</h4>
            <div className='flex-weather-container'>
              {props.weather.map((weatherCode:number) => {
                return <img className='flex-weather-item' src={getWeatherSymbols(weatherCode)} />
              })}
            </div>
            <Link to={`/${props._id}`}> <button className='btn-grad sml'>Show details</button></Link>

          </div>
        </div>
      </div>
      <div className='card-info primary'>
        <div className='details'>
          <p>£{props.price.toFixed(2)}</p>
          <p>{props.site}</p>
        </div>
      </div>

    </div>
  )
}
