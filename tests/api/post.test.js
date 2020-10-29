/* eslint-disable no-undef */
const { MongoClient } = require('mongodb')
const dbURI = require('../../config/environment')
const request = require('supertest')
const index = require('../../index')
const { createItem, deleteOneClothesData } = require('../../controllers/clothingApi')



describe('TEST THE API ROOT RESPONSE', ()=> {

  test('Should respond with 200 status', () => {
    return request(index).get('/api').then(res => {
      expect(res.statusCode).toBe(200)
    })
  })
  test('Should respond with Successful Call string', () => {
    return request(index).get('/api').then(res => {
      expect(res.text).toBe('successful call')
    })
  })
})


//  ----------------- CREATE ONE REQUESTS -----------------------

describe('DATABASE CREATE ONE ITEM', () => {
  let connection
  let db
  const exampleDatabaseEntry = {
    title: 'adidas Originals sweatshirt with 3 stripes in navy',
    description: 'adidas needs no introduction. The brand’s famous 3-Stripes can be seen on the track, field and in the latest streetwear trends.',
    price: 42.95,
    image: 'https://images.asos-media.com/products/adidas-originals-sweatshirt-with-3-stripes-in-navy/20050362-1-navy?$XXL$&wid=513&fit=constrain',
    colour: 'navy',
    size: 'S/M/L',
    material: 'cotton',
    weather: [3,5,6,8],
    category: 'jumper',
    site: 'Asos',
    link: 'https://www.asos.com/adidas-originals/adidas-originals-sweatshirt-with-3-stripes-in-navy/prd/20050362?colourwayid=60004270&SearchQuery=&cid=5668'
  }


  beforeAll(async () => {
    connection = await MongoClient.connect(dbURI, {
      useNewUrlParser: true
    })
    db = await connection.db(global.__MONGO_DB_NAME__)
  })

  afterAll(async () => {
    await db.collection('clothes').deleteMany({ title: 'adidas Originals sweatshirt with 3 stripes in navy' })
    await connection.close() 
    await db.close()
  })


  const urlPath = '/api/clothes'

  test('api should have 201 created response status', async () => {
    return request(index)
      .post(urlPath)
      .send(exampleDatabaseEntry)
      .set('Accept', 'application/json')
      .then(res =>{
        expect(res.status).toBe(201)
      })
  })

  test('api should return the created object', async () => {
    return request(index)
      .post(urlPath)
      .send(exampleDatabaseEntry)
      .set('Accept', 'application/json')
      .then(res =>{
        expect(res.body.name).toEqual(exampleDatabaseEntry.name)
      })
  })
})



