import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props:any) {
  return (
    <div className='card-container'>
      <Link to={`/${props._id}`}>
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img className='card-image' src={props.image} />
            </div>
            <div className='card-back'>
              <p>Back</p>
            </div>
          </div>
        </div>
      </Link>
      <div className='card-info primary'>
        <div className='details'>
  <p>£{props.price}</p>
  <p>{props.site}</p>
        </div>
      </div>

    </div>
  )
}
