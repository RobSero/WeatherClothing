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

module.exports = {
  getAllClothesData,
  getOneClothesData
}