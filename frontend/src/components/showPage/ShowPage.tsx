import React from 'react'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import { getOneItem } from '../../lib/api'
import CardScroller from '../common/CardScroller'


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


export default function ShowPage() {
  const [clothesData, setClothes] = React.useState<ClothesDetails>()

  React.useEffect(() => {
    const getClothes = async () => {
      try {
        const res = await getOneItem('5f9409294d740f1c035b452f')
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
          <div className='flex-item'>
            <img src={clothesData.image} />
          </div>
          <div className='flex-item'>
            <h3>{clothesData.title}</h3>
            <p>{clothesData.price}</p>
            <p>{clothesData.description}</p>
            <p>colour: {clothesData.colour}</p>
            <p>size: {clothesData.size}</p>
            <p>material: {clothesData.material}</p>
  <a className='btn-grad' href={clothesData.link}>View on {clothesData.site}</a>
          </div>
        </div>
    <CardScroller />
      </div>
      <Footer />
    </>
  )
}
