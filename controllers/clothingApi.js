// HANDLE ALL CLOTHING API REQUESTS
const Clothes = require('../database/ClothingModels')


const tShirt =   [{
  id: 0,
  title: 'hello',
  description: 'hello',
  price: 44,
  image: 'hello',
  colour: 'hello',
  size: 'hello',
  material: 'hello',
  weather: 'hello',
  category: 'hello',
  link: 'hello'
},
{
  id: 1,
  title: 'hello',
  description: 'hello',
  price: 15,
  image: 'hello',
  colour: 'hello',
  size: 'hello',
  material: 'hello',
  weather: 'hello',
  category: 'hello',
  link: 'hello'
}]

async function getAllClothesData(req,res){
  const allClothes = await Clothes.find()
  res.json(allClothes)
}

module.exports = {
  getAllClothesData
}