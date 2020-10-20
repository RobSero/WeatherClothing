const express = require('express')

const app = express()

// MIDDLEWARE



app.get('/', (req,res) => {
  res.send('<h1>Home</h1>')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('SERVER UP AND RUNNING')
})