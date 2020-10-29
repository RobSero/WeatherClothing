/* eslint-disable no-undef */
const { MongoClient } = require('mongodb')
const dbURI = require('../../config/environment')
const request = require('supertest')
const index = require('../../index')
const { getOneClothesData, getAllClothesData } = require('../../controllers/clothingApi')



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




describe('DATABASE GET ONE REQUESTS', () => {
  let connection
  let db

  beforeAll(async () => {
    connection = await MongoClient.connect(dbURI, {
      useNewUrlParser: true
    })
    db = await connection.db(global.__MONGO_DB_NAME__)
  })

  afterAll(async () => {
    await db.collection('users').drop()
    await connection.close() 
    await db.close()
  })


  //  ----------------- GET ONE REQUESTS -----------------------
  const productId = '5f95c23547c0a41c9c03b0c5'
  const urlPath = `/api/clothes/${productId}`

  test('api should have 200 response status', async () => {
    return request(index).get(urlPath).then(res =>{
      expect(res.status).toBe(200)
    })
  })

  test('Response content should be JSON', async () => {
    return request(index).get(urlPath).then(res =>{
      expect(res.header['content-type']).toMatch('json')
    })
  })

  test('Response should be the correct item', async () => {
    return request(index).get(urlPath).then(res =>{
      expect(res.body._id).toBe(productId)
    })
  })
})






describe('DATABASE GET ALL REQUESTS', () => {
  let connection
  let db

  beforeAll(async () => {
    connection = await MongoClient.connect(dbURI, {
      useNewUrlParser: true
    })
    db = await connection.db(global.__MONGO_DB_NAME__)
  })

  afterAll(async () => {
    await db.collection('users').drop()
    await connection.close() 
    await db.close()
  })


  //  ----------------- GET ALL  REQUESTS -----------------------

  const urlPath = '/api/clothes'

  test('api should have 200 response status', async () => {
    return request(index).get(urlPath).then(res =>{
      expect(res.status).toBe(200)
    })
  })

  test('Response content should be JSON', async () => {
    return request(index).get(urlPath).then(res =>{
      expect(res.header['content-type']).toMatch('json')
    })
  })

  test('Response content should be truthy', async () => {
    return request(index).get(urlPath).then(res =>{
      expect(res.body).toBeTruthy()
    })
  })

  test('Response content should be an array', async () => {
    return request(index).get(urlPath).then(res =>{
      expect(res.body).toBeInstanceOf(Array)
    })
  })


})

