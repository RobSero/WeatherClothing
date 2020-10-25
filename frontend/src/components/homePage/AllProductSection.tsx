import React from 'react';
import CardScroller from '../common/CardScroller'
import {getClothesRequest} from '../../lib/api'


export default function AllProductSection(props:any) {
const [clothes, setClothes] = React.useState<any>({})



React.useEffect(()=> {
  const getClothes = async(weatherCode:number) => {
    try {
      const res = await getClothesRequest(weatherCode)
      setClothes(res.data)
    } catch(err){
      console.log(err);
    }
  }
  getClothes(Math.floor(props.weather/100))
},[props])


const clothingLists = []
for (const property in clothes){
  console.log(property, clothes[property]);
  clothingLists.push(<CardScroller key={Math.random()} category={property} clothes={clothes[property]} />)
}

  return (
    <div className='productlist-container' id='home-products'>
    <h3 className='productlist-header'>{!props.weather? 'see all products...' : `products for ${props.weather.description}`}</h3>
    {clothingLists}

    </div>
  );
}
