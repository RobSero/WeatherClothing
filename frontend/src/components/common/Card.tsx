import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props:any) {
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
    <img className='flex-weather-item' src='http://openweathermap.org/img/wn/10d@2x.png' />
    <img className='flex-weather-item' src='http://openweathermap.org/img/wn/10d@2x.png' />
    <img className='flex-weather-item' src='http://openweathermap.org/img/wn/10d@2x.png' />
    <img className='flex-weather-item' src='http://openweathermap.org/img/wn/10d@2x.png' />
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
