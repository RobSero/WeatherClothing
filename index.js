const express = require('express')
const mongoose = require('mongoose')
const app = express()


// DATABASE
mongoose.connect('mongodb://localhost:27017/clothingDB', { useNewUrlParser: true, useUnifiedTopology: true })



// MIDDLEWARE
app.use(express.json()) // body-parser
app.use(express.urlencoded({ extended: false })) // access encoded data






// STATICS
app.use(express.static(`${__dirname}/frontend/build`))




// CLIENT ENTERING WEBSITE - SEND REACT BUILD
app.get('/*', (req,res) => {
  res.sendFile(`${__dirname}/frontend/build/index.html`)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('SERVER UP AND RUNNING')
})