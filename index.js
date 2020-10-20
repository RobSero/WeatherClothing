const express = require('express')
const mongoose = require('mongoose')


const app = express()
mongoose.connect('mongodb://localhost:27017/clothingDB', { useNewUrlParser: true, useUnifiedTopology: true })
// MIDDLEWARE
const Clothes = mongoose.model('Clothes', { name: 'String' })
const jumperOne = new Clothes({ name: 'green sexy jumper small' })
jumperOne.save().then(()=> {
  console.log('saved!')
})

app.get('/*', (req,res) => {
  res.send('<h1>Home</h1>')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('SERVER UP AND RUNNING')
})