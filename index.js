const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require('mongoose')
const path = require('path')
const dbURI = require('./config/environment')
const router = require('./routing/routes')
const app = express()
const cors = require('cors')
const schema = require('./database/clothesSchema')



// DATABASE
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })



// MIDDLEWARE
app.use(cors())
app.use(express.json()) // body-parser
app.use(express.urlencoded({ extended: false })) // access encoded data
app.use('/api/graphQL', graphqlHTTP({
  schema: schema,
  graphiql: true
}))





// STATICS
app.use(express.static(path.join(__dirname,'frontend/build')))


app.use('/api', router)

// CLIENT ENTERING WEBSITE - SEND REACT BUILD
app.get('/*', (req,res) => {
  res.sendFile(`${__dirname}/frontend/build/index.html`)
})


// LISTENERS
const port = process.env.PORT || 4000
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log('SERVER UP AND RUNNING')
  })
}
module.exports = app