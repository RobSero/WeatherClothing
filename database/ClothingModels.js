const mongoose = require('mongoose')


const ClothingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  colour: { type: String, required: true },
  size: { type: String, required: true },
  material: { type: String, required: true },
  weather: [{ type: Number, required: true }],  //reference to the openWeather API weather codes
  category: { type: String, required: true }, 
  site: { type: String, required: true } ,
  link: { type: String, required: true }
})

module.exports = mongoose.model('clothes', ClothingSchema)