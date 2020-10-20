// HANDLE ALL CLOTHING API REQUESTS
const mongoose = require('mongoose')

const Clothes = mongoose.model('Clothes', { name: 'String' })
const jumperOne = new Clothes({ name: 'green sexy jumper small' })
jumperOne.save().then(()=> {
  console.log('saved!')
})