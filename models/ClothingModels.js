const mongoose = require('mongoose')


const ClothingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  colour: { type: String, required: true },
  size: { type: String, required: true },
  material: { type: String, required: true },
  weather: { type: String, required: true },
  category: { type: String, required: true },
  link: { type: String, required: true }
})

module.exports = mongoose.model('clothes', ClothingSchema)