import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { getOneItem } from '../../lib/api'
import CardScroller from '../common/CardScroller'
import {useParams} from 'react-router-dom'

interface ClothesDetails {
  id: string,
  title: string,
  description: string,
  price: number,
  image: string,
  colour: string,
  size: string,
  material: string,
  weather: string,
  category: string,
  site: string,
  link: string
}

interface ParamValues {
  id: string
}


export default function ShowPage() {
  const [clothesData, setClothes] = React.useState<ClothesDetails>()
  let {id} = useParams<ParamValues>()


  

  React.useEffect(() => {
    const getClothes = async () => {
      try {
        const res = await getOneItem(id)
        setClothes(res.data)
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getClothes()
  }, [])



  if (!clothesData) {
    return null
  }


  return (
    <>
      <Navbar />
      <div className='show-container'>
        <div className='flex-show-section'>
          <div className='flex-item animate__animated animate__fadeInLeft'>
            <img className='show-image' src={clothesData.image} />
          </div>
          <div className='flex-item animate__animated animate__fadeInRight'>
            <div className='information'>
            <h3>{clothesData.title}</h3>
            <p className='price'>£{clothesData.price.toFixed(2)}</p>
            <p className='description'>{clothesData.description}</p>
            <p className='details'><span className='info-label'>colour:</span> {clothesData.colour}</p>
            <p className='details'><span className='info-label'>sizes:</span> {clothesData.size}</p>
            <p className='details'><span className='info-label'>materials:</span> {clothesData.material}</p>
            <div className='sizes-box'>
    <p className='sizes-header'>Available Sizes</p>
    <p>More available sizes may be found on the brand websites for these products</p>
  </div>
  <div className='flex-weather-container center'>
    <img className='flex-weather-item' src='http://openweathermap.org/img/wn/10d@2x.png' />
    <img className='flex-weather-item' src='http://openweathermap.org/img/wn/10d@2x.png' />
    <img className='flex-weather-item' src='http://openweathermap.org/img/wn/10d@2x.png' />
    <img className='flex-weather-item' src='http://openweathermap.org/img/wn/10d@2x.png' />
  </div>
  <a className='btn-grad mid' href={clothesData.link} target='_blank'>view on {clothesData.site}</a>
  
  </div>
          </div>
        </div>
    <CardScroller category={clothesData.category} clothes={clothes[property]}  />
      </div>
      <Footer />
    </>
  )
}
