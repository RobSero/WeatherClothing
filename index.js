const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const router = require('./routing/routes')
const app = express()


// DATABASE
mongoose.connect('mongodb://localhost:27017/clothingDB', { useNewUrlParser: true, useUnifiedTopology: true })



// MIDDLEWARE
app.use(express.json()) // body-parser
app.use(express.urlencoded({ extended: false })) // access encoded data






// STATICS
app.use(express.static(path.join(__dirname,'frontend/build')))


app.use('/api', router)

// CLIENT ENTERING WEBSITE - SEND REACT BUILD
app.get('/*', (req,res) => {
  res.sendFile(`${__dirname}/frontend/build/index.html`)
})


// LISTENERS
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('SERVER UP AND RUNNING')
})