// HANDLE ALL CLOTHING API REQUESTS
const mongoose = require('mongoose')

const Clothes = mongoose.model('Clothes', { name: 'String' })
const jumperOne = new Clothes({ name: 'green sexy jumper small' })
jumperOne.save().then(()=> {
  console.log('saved!')
})

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

function getAllClothesData(req,res){
  res.json(tShirt)
}

module.exports = {
  getAllClothesData
}