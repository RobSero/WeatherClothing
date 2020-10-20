const router = require('express').Router()
const { getAllClothesData, getOneClothesData } = require('../controllers/clothingApi')


//  FETCHING CLOTHING DATA
router.route('/clothes')
  .get(getAllClothesData)

router.route('/clothes/:id')
  .get(getOneClothesData)


module.exports = router


