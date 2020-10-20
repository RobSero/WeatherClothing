const router = require('express').Router()
const { getAllClothesData, getOneClothesData, createItem, deleteOneClothesData } = require('../controllers/clothingApi')


//  FETCHING CLOTHING DATA
router.route('/clothes')
  .get(getAllClothesData)

router.route('/clothes/:id')
  .get(getOneClothesData)


// UPDATE DATABASE DATA
router.route('/clothes')
  .post(createItem)

router.route('/clothes/:id')
  .delete(deleteOneClothesData)

module.exports = router


