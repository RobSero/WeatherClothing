import React from 'react'
import {Link} from 'react-router-dom'

export default function Card() {
  return (
    <div className='card-container'>
      <Link to='/1'>
      <div className='card'>
        <img className='card-image' src='https://res.cloudinary.com/dy7eycl8m/image/upload/v1603289061/pngwave_67_x6rjcp.png' />
      </div>
      </Link>
      <div className='card-info primary'>
        <div className='details'>
        <p>£4.99</p>
        <p>Asos</p>
        </div>
      </div>
      
    </div>
  )
}
