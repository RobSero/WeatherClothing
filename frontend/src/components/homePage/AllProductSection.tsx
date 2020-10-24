import React from 'react';
import CardScroller from '../common/CardScroller'
import {getClothesRequest} from '../../lib/api'


export default function AllProductSection({weather}:any) {
const [clothes, setClothes] = React.useState()



React.useEffect(()=> {
  const getClothes = async(weatherCode:number) => {
    try {
      const res = await getClothesRequest(weatherCode)
      setClothes(res.data)
    } catch(err){
      console.log(err);
    }
  }
  getClothes(weather)
},[weather])


  return (
    <div className='productlist-container' id='home-products'>
    <h3 className='productlist-header'>see all products...</h3>
    <CardScroller />
    <CardScroller />
    <CardScroller />
    </div>
  );
}
