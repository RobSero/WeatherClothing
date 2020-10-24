// HANDLE ALL CLOTHING API REQUESTS
const Clothes = require('../database/ClothingModels')



// ------- GET ALL CLOTHES ITEMS -------------
//  GET REQUEST - /api/clothes

async function getAllClothesData(req,res){
  const allClothes = await Clothes.find()
  res.json(allClothes)
}



// ------- GET ONE CLOTHES ITEM -------------
//  GET REQUEST - /api/clothes/<clothesId>

async function getOneClothesData(req,res){
  const clothingId = req.params.id
  try {
    const oneClothesItem = await Clothes.findById(clothingId)
    res.json(oneClothesItem)
  } catch (err){
    res.json(err.message)
  }
}


// ------- GET CLOTHES BY WEATHERCODE -------------
//  GET REQUEST - /api/clothes/<clothesId>

async function getClothesDataByWeather(req,res){
  const weatherId = req.params.weatherId
  let clothesItems
  try {
    if (!parseInt(weatherId)){
      console.log('FALSE')
      clothesItems = await Clothes.find()
    } else {
      clothesItems = await Clothes.find({ weather: weatherId })
    }
    const clothesObject = {}
    clothesItems.forEach(clothesItem => {
      if (clothesObject.hasOwnProperty(clothesItem.category)){
        clothesObject[clothesItem.category].push(clothesItem)
      } else {
        clothesObject[clothesItem.category] = [clothesItem]
      }
    })
    res.json(clothesObject)

  } catch (err){
    res.json(err.message)
  }
}
















// -------  CREATE CLOTHES ITEM (DELETE AFTER TESTING) -------------
//  POST REQUEST - /api/clothes/<clothesId>

async function createItem(req,res){
  const clothesBody = req.body
  console.log(clothesBody)
  try {
    const newClothesItem = new Clothes(clothesBody)
    await newClothesItem.save()
    res.json(newClothesItem)
  } catch (err){
    res.json(err.message)
  }
}



// ------- DELETE ONE CLOTHES ITEM -------------
//  DELETE REQUEST - /api/clothes/<clothesId>

async function deleteOneClothesData(req,res){
  const clothingId = req.params.id
  try {
    const oneClothesItem = await Clothes.deleteOne({ _id: clothingId })
    res.json(oneClothesItem)
  } catch (err){
    res.json(err.message)
  }
}



module.exports = {
  getAllClothesData,
  getOneClothesData,
  getClothesDataByWeather,
  createItem,
  deleteOneClothesData
}